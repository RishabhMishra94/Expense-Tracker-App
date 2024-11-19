

import { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ExpensePage from './pages/ExpensePage';
import IncomePage from './pages/IncomePage';
import SearchPage from './pages/SearchPage';


function App() {
 
return (
    
        <Router>
      <div className="p-6">
        <nav className="w-full flex space-x-4 mb-6 gap-4 justify-evenly">
          <Link className="text-blue-500 1px solid black" to="/">Dashboard</Link>
          <Link className="text-red-500" to="/expenses">Expenses</Link>          
           <Link className="text-green-500" to="/income">Income</Link>
           <Link className="text-gray-700" to="/search">Search</Link>
         </nav>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/expenses" element={<ExpensePage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  

    
  );
};

export default App

