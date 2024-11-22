import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InternshipForm from "./InternshipForm ";
import SuccessfullyApplied from "./SuccessfullyApplied ";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InternshipForm />} />
        <Route path="/success" element={<SuccessfullyApplied />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
