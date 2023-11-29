import React, { useState } from "react";
import Teacher from "../components/Teacher";

const TeacherContainer = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "John Smith", subject: "Math" },
    { id: 2, name: "Jane Doe", subject: "English" },
  ]);

  const handleAddTeacher = () => {
    const newTeacher = {
      id: teachers.length + 1,
      name: "New Teacher",
      subject: "New Subject",
    };

    setTeachers([...teachers, newTeacher]);
  };

  const handleEditTeacher = (id) => {
    console.log(`Editing teacher with ID: ${id}`);
  };

  const handleDeleteTeacher = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  return (
    <Teacher
      teachers={teachers}
      onAddTeacher={handleAddTeacher}
      onEditTeacher={handleEditTeacher}
      onDeleteTeacher={handleDeleteTeacher}
    />
  );
};

export default TeacherContainer;
