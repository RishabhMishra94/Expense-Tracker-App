

import React from 'react';

const SummaryCard = ({ totalIncome, totalExpenses, balance }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-4 bg-green-100 border-l-4 border-green-500 rounded shadow">
        <h3 className="text-xl font-bold text-green-700">Total Income</h3>
        <p className="text-2xl font-semibold text-green-900">${totalIncome.toFixed(2)}</p>
      </div>

      <div className="p-4 bg-red-100 border-l-4 border-red-500 rounded shadow">
        <h3 className="text-xl font-bold text-red-700">Total Expenses</h3>
        <p className="text-2xl font-semibold text-red-900">${totalExpenses.toFixed(2)}</p>
      </div>

      <div className="p-4 bg-blue-100 border-l-4 border-blue-500 rounded shadow">
        <h3 className="text-xl font-bold text-blue-700">Balance</h3>
        <p className={`text-2xl font-semibold ${balance >= 0 ? 'text-blue-900' : 'text-red-900'}`}>
          ${balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
