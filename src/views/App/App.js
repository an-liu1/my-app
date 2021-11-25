import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import TopNav from "../Layout/TopNav";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import DashboardHook from "../DashboardHook/DashboardHook";

function App() {
  const loading = useSelector((state) => state.loading);
  return (
    <Spin
      tip="Loading..."
      spinning={loading}
      size="large"
      style={{ maxHeight: "none", height: "100vh" }}
    >
      <div className="App">
        <TopNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboardhook" element={<DashboardHook />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Spin>
  );
}

export default App;
