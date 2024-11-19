import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome } from '../store/slices/incomeSlice';

const IncomeForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    date: '',
    description: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.category && formData.amount && formData.date) {
      dispatch(addIncome(formData));
      setFormData({ category: '', amount: '', date: '', description: '' });
    } else {
      alert('Please fill  required fields.');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          placeholder="Enter category"
          className="w-full p-2 border rounded"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          className="w-full p-2 border rounded"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description (Optional)</label>
        <textarea
          placeholder="Add a description (optional)"
          className="w-full p-2 border rounded"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Income
      </button>
    </form>
  );
};

export default IncomeForm;
