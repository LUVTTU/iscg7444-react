// GradeAdd.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants';

function GradeAdd() {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/grades`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, grade })
    })
      .then(res => res.json())
      .then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Add New Grade</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Grade</label>
          <input type="text" className="form-control" value={grade} onChange={(e) => setGrade(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Add</button>
      </form>
    </div>
  );
}

export default GradeAdd;
