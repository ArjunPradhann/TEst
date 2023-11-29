import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Student = ({ students, onAddStudent, onDeleteStudent }) => {
  return (
    <div>
      <h2>Student Management</h2>
      <Button variant="contained" onClick={onAddStudent}>
        Add Student
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.slice(0, 10).map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>
                  <Button variant="outlined">Edit</Button>
                  <Button
                    variant="outlined"
                    onClick={() => onDeleteStudent(student.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Student;
