import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import RegisterPage from "../components/pages/RegisterPage";
import LoginPage from "../components/pages/LoginPage";
import SettingsPage from "../components/pages/SettingsPage";
import CartPage from "../components/pages/CartPage";
import ProtectedRoute from "../../frontend/components/routes/ProtectedRoute";
import SettingsAccount from "../components/pages/settings/SettingsAccount";
import SettingsOrder from "../components/pages/settings/SettingsOrder";
import SettingsCart from "../components/pages/settings/SettingsCart";
import MoviePage from "../components/widgets/MoviePage";
import ThankYouPage from "../components/pages/ThankYouPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*Public Routes */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/*Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />}>
              <Route index element={<SettingsAccount />} />
              <Route path="account" element={<SettingsAccount />} />

              <Route path="cart" element={<SettingsCart />} />
              <Route path="orders" element={<SettingsOrder />} />
            </Route>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />

            <Route path ="/movie/:imdbID" element={<MoviePage/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
