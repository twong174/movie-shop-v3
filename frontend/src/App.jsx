import { useState } from "react";
import "./App.css";

// Page Imports

import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import WelcomePage from "../components/pages/WelcomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
