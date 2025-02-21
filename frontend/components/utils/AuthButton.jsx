import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AuthButton = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  const handleCheckAuth = async () => {
    if (isAuthenticated) {
      alert(
        `Authenticated! Welcome ${user.firstName} ${user.username} ${user.emailAddress}`
      );
    } else {
      alert("Not authenticated");
    }
  };
  return (
    <button className="border p-1 rounded-md " onClick={handleCheckAuth}>
      Check Auth
    </button>
  );
};

export default AuthButton;
