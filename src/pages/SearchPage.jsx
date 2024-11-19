

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RecordList from '../components/RecordList';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const expenses = useSelector((state) => state.expenses.records);
  const income = useSelector((state) => state.income.records);

  const results = [
    ...expenses.filter((record) =>
      record.category.toLowerCase().includes(query.toLowerCase())
    ),
    ...income.filter((record) =>
      record.category.toLowerCase().includes(query.toLowerCase())
    ),
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <input
        type="text"
        placeholder="Search by category"
        className="w-full p-2 border rounded mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
      
      { <RecordList 
        records={results}
        onDelete={(id) => console.log('Delete record with id:', id)}
        onEdit={(id) => console.log('Edit record with id:', id)}/>
      
         }
      
    </div>
  );
};

export default SearchPage;
