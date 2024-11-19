import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid'; 

const initialState = {
  records: [],
};


const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const { amount, category, date, description } = action.payload;
       console.log(action.payload)
      state.records.push({
        id: uuid(),
        amount,
        date,
        category,
        description: description || '',
      });
    },
    
 
    editExpense: (state, action) => {
        const { id, updatedData } = action.payload;
        const index = state.records.findIndex((expense) => expense.id === id);
         if (index !==-1) {
          state.records[index] = { 
            ...state.records[index], 
            ...updatedData,
          };
        } 
      },

    deleteExpense: (state, action) => {
      state.records = state.records.filter((expense) => expense.id !== action.payload);
    //   console.log(state.records)
    },
   },
  
});


export const { addExpense, editExpense, deleteExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
