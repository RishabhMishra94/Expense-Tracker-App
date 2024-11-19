
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import RecordList from '../components/RecordList';
import { deleteExpense } from '../store/slices/expensesSlice';
import { editExpense } from '../store/slices/expensesSlice';

const ExpensePage = () => {
  const expenses = useSelector((state) => state.expenses.records);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
    
  };
  const handleEdit=(id)=>{
  dispatch(editExpense(id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Expenses</h1>
      <ExpenseForm />
      <h2 className="text-xl font-bold mt-6">Expense Records</h2>
      <RecordList records={expenses} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default ExpensePage;

