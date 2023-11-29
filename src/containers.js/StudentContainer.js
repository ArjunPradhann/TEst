import React, { useState } from "react";
import Student from "../components/Students";

const StudentContainer = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", class: "10A" },
    { id: 2, name: "Jane Doe", class: "11B" },
  ]);

  const handleAddStudent = () => {
    const newStudent = {
      id: students.length + 1,
      name: "New Student",
      class: "New Class",
    };

    setStudents([...students, newStudent]);
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <Student
      students={students}
      onAddStudent={handleAddStudent}
      onDeleteStudent={handleDeleteStudent}
    />
  );
};

export default StudentContainer;
