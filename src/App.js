// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GradeList from './components/GradeList';
import GradeDetail from './components/GradeDetail';
import GradeAdd from './components/GradeAdd';
import GradeUpdate from './components/GradeUpdate';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <Link className="navbar-brand" to="/">Student Grades</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<GradeList />} />
          <Route path="/grades/:id" element={<GradeDetail />} />
          <Route path="/add" element={<GradeAdd />} />
          <Route path="/update/:id" element={<GradeUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
