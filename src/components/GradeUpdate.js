// GradeUpdate.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants';

function GradeUpdate() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/grades/${id}`)
      .then(res => res.json())
      .then(data => {
        setName(data.name);
        setGrade(data.grade);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/grades/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, grade })
    })
      .then(res => res.json())
      .then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Update Grade</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Grade</label>
          <input type="text" className="form-control" value={grade} onChange={(e) => setGrade(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success mt-2">Update</button>
      </form>
    </div>
  );
}

export default GradeUpdate;
