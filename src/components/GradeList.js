import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {BASE_URL} from "../constants";

function GradeList() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + '/grades')
      .then(res => res.json())
      .then(setGrades);
  }, []);

  return (
    <div>
      <h2>Student Grade List</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.id}</td>
              <td>{grade.name}</td>
              <td>{grade.grade}</td>
              <td>
                <Link to={`/grades/${grade.id}`} className="btn btn-sm btn-info mx-1">View</Link>
                <Link to={`/update/${grade.id}`} className="btn btn-sm btn-warning mx-1">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GradeList;
