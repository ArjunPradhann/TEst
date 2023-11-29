import React, { useState } from "react";
import { AppBar, Tab, Tabs, Container } from "@mui/material";
import StudentContainer from "./containers.js/StudentContainer";
import TeacherContainer from "./containers.js/TeacherContainer";
import MarksContainer from "./containers.js/MarksContainer";
import "../src/App.css";

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <AppBar position="static">
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab sx={{ color: "white" }} label="Student Marks" />
          <Tab label="Teacher Marks" />
          <Tab label="Marks Board" />
        </Tabs>
      </AppBar>
      <TabPanel value={tabValue} index={0}>
        <StudentContainer />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <TeacherContainer />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <MarksContainer />
      </TabPanel>
    </Container>
  );
}

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default App;
