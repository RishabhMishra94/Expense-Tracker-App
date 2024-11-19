

import React from 'react';
import { useSelector } from 'react-redux';
import SummaryCard from '../components/SummaryCard';
import LineCart from '../components/LineCart'

const DashboardPage = () => {
  const expenses = useSelector((state) => state.expenses.records);
  const income = useSelector((state) => state.income.records);

  const totalIncome = income.reduce((sum, record) => sum + parseFloat(record.amount), 0);
  const totalExpenses = expenses.reduce((sum, record) => sum + parseFloat(record.amount), 0);
  const balance = totalIncome - totalExpenses;

  const expenseChartData = expenses.map((record) => ({
    date: record.date,
    amount: parseFloat(record.amount),
  }));

  const incomeChartData = income.map((record) => ({
    date: record.date,
    amount: parseFloat(record.amount),
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <SummaryCard totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <LineCart data={expenseChartData} title="Expense Trends" lineColor="#ff0000" />
        <LineCart data={incomeChartData} title="Income Trends" lineColor="#00ff00" />
      </div>
    </div>
  );
};

export default DashboardPage;

