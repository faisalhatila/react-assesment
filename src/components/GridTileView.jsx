// src/components/GridTileView.js
import React, { useState } from 'react';

const students = [
  { id: 1, name: 'John Doe', age: 20, class: 'Biology' },
  { id: 2, name: 'Jane Smith', age: 21, class: 'Chemistry' },
  // Add more sample data here
];

const GridTileView = () => {
  const [isTileView, setIsTileView] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleTileClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setIsTileView(!isTileView)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Toggle View
      </button>

      {!isTileView ? (
        // Grid View
        <div className="grid grid-cols-5 gap-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="p-4 bg-white shadow-md rounded-md hover:shadow-lg cursor-pointer"
              onClick={() => handleTileClick(student)}
            >
              <p>{student.name}</p>
              <p>{student.age} years old</p>
              <p>{student.class}</p>
            </div>
          ))}
        </div>
      ) : (
        // Tile View
        <div className="grid grid-cols-2 gap-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="p-4 bg-white shadow-md rounded-md hover:shadow-lg cursor-pointer"
              onClick={() => handleTileClick(student)}
            >
              <p>{student.name}</p>
              <button className="bg-green-500 text-white px-2 py-1 rounded-md">
                Edit
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                Delete
              </button>
              <button className="bg-yellow-500 text-white px-2 py-1 rounded-md">
                Flag
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Detailed View */}
      {selectedStudent && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3>Details for {selectedStudent.name}</h3>
          <p>Age: {selectedStudent.age}</p>
          <p>Class: {selectedStudent.class}</p>
          <button
            onClick={() => setSelectedStudent(null)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Back to Tiles
          </button>
        </div>
      )}
    </div>
  );
};

export default GridTileView;
