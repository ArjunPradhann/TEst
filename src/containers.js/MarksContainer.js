import React, { useState } from "react";
import Marks from "../components/Marks";

const MarksContainer = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", class: "10A" },
    { id: 2, name: "Jane Doe", class: "11B" },
  ]);

  const [teachers, setTeachers] = useState([
    { id: 1, name: "Teacher 1", subject: "Math" },
    { id: 2, name: "Teacher 2", subject: "English" },
  ]);

  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleSelectStudent = (selected) => {
    setSelectedStudents(selected);
  };

  const handleFetchMarks = (selectedStudents) => {
    console.log("Fetching marks for students:", selectedStudents);
  };

  return (
    <Marks
      students={students}
      teachers={teachers}
      selectedStudents={selectedStudents}
      onSelectStudent={handleSelectStudent}
      onFetchMarks={handleFetchMarks}
    />
  );
};

export default MarksContainer;
