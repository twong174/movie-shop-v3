import { useState } from "react";
import "./App.css";

// Page Imports

import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import AccountPage from "../components/pages/AccountPage";
import WelcomePage from "../components/pages/WelcomePage";
import MovieCard from "../components/MovieCard";
import CartPage from "../components/pages/CartPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movie" element={<MovieCard />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
