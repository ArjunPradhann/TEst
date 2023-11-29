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

const Teacher = ({
  teachers,
  onAddTeacher,
  onEditTeacher,
  onDeleteTeacher,
}) => {
  return (
    <div>
      <h2>Teacher Management</h2>
      <Button variant="contained" onClick={onAddTeacher}>
        Add Teacher
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Teacher ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.slice(0, 10).map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.id}</TableCell>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => onEditTeacher(teacher.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => onDeleteTeacher(teacher.id)}
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

export default Teacher;
