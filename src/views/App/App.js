import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import DashboardHook from "../DashboardHook/DashboardHook";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboardhook">Dashboard Hook</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboardhook" element={<DashboardHook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
