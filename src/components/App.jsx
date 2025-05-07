import React, { useState } from 'react';
import StudentList from './StudentList';

// TODO 1: Add a resetAttendance function to mark all students as absent

function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', present: false },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: false },
    { id: 4, name: 'Diana', present: false }
  ];

  const [students, setStudents] = useState(initialStudents);

  const resetAttendance = () => {
    setStudents(prev => prev.map(student => ({ ...student, present: false })));
  };

  // TODO 2: Create a toggleAttendance function and pass it to StudentList
  const toggleAttendance = (id) => {
    setStudents(prev => {
      return prev.map(student => {
        if (student.id === id) {
          return { ...student, present: !student.present };
        }
        return student;
      });
    });
  };
  
  const presentCount = students.filter(student => student.present).length;

  return (
    <div className='container'>
      <h1>🏫 Attendance Tracker</h1>
      <p>Present:{presentCount} </p>

      {/* TODO 3: Add a Reset Attendance button here */}
      <button onClick={resetAttendance}>Reset Attendance</button>
      <StudentList students={students} onToggle={toggleAttendance} />
    </div>
  );
}

export default App;
