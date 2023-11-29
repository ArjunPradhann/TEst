import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";

const Marks = ({ students, teachers, selectedStudents, onSelectStudent }) => {
  const [searchText, setSearchText] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>Marks Board</h2>
      <TextField
        label="Search by Name"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Teacher</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Marks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{teachers.length > 0 && teachers[0].name}</TableCell>
                <TableCell>
                  {teachers.length > 0 && teachers[0].subject}
                </TableCell>
                <TableCell>{Math.floor(Math.random() * 101)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Marks;
