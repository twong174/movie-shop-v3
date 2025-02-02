import React, {useState, useEffect, useContext, createContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => { 
  const [user, setUser] = useState(null);

  
};

export default AuthContext;