import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IncomeForm from '../components/IncomeForm';
import RecordList from '../components/RecordList';
import { deleteIncome, editIncome } from '../store/slices/incomeSlice';


const IncomePage = () => {
  const income = useSelector((state) => state.income.records);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteIncome(id));
  };
  const handleEdit = (id) => {
    dispatch(editIncome(id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4"> Your Income</h1>
      <IncomeForm />
      <h2 className="text-xl font-bold mt-6">Income Records</h2>
      <RecordList records={income} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default IncomePage;

