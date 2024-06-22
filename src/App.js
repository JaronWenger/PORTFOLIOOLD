import React from 'react';
import Main from './components/Main';
import StockApi from './components/StockApi';
import TaskList from './components/TaskList';
import Fin from './components/FIN';


import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';

export default function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/stockapi" element={<StockApi />} />
    <Route path="/tasklist" element={<TaskList />} />
    <Route path="/authentication" element={<Auth />} />
    <Route path="/financialtracker" element={<Fin />} />
  </Routes>
</Router>

  );
}
