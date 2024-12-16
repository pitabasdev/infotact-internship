import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InternshipForm from "./InternshipForm ";
import SuccessfullyApplied from "./SuccessfullyApplied ";
import Dashboard from "./Dashboard";
import RegistrationClosed from "./RegistrationClosed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationClosed />} />
        <Route path="/success" element={<SuccessfullyApplied />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
