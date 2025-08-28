// GradeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants';

function GradeDetail() {
  const { id } = useParams();
  const [grade, setGrade] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/grades/${id}`)
      .then(res => res.json())
      .then(data => setGrade(data));
  }, [id]);

  const handleDelete = () => {
    fetch(`${BASE_URL}/grades/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => navigate('/'));
  };

  if (!grade) return <div>Loading...</div>;

  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>ID:</strong> {grade.id}</p>
      <p><strong>Name:</strong> {grade.name}</p>
      <p><strong>Grade:</strong> {grade.grade}</p>
      <Link to={`/update/${grade.id}`} className="btn btn-warning mx-1">Edit</Link>
      <button onClick={handleDelete} className="btn btn-danger">Delete</button>
    </div>
  );
}

export default GradeDetail;
