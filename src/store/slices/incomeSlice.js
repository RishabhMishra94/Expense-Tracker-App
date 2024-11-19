
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid'; 

const initialState = {
  records: [],
};

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      const { amount, category, date, description } = action.payload;
      state.records.push({
        id: uuid(),
        amount,
        date,
        category,
        description: description || '',
      });
    },
    editIncome: (state, action) => {
        const { id, updatedData } = action.payload;
        const index = state.records.findIndex((expense) => expense.id === id);
         if (index !==-1) {
          state.records[index] = { 
            ...state.records[index], 
            ...updatedData,
          };
        } 
      },

    deleteIncome: (state, action) => {
      state.records = state.records.filter((income) => income.id !== action.payload);
    },
  },
});

export const { addIncome, editIncome, deleteIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
