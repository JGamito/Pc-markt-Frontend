import React, { useReducer } from "react";
import { AuthContext } from "../contexts/auth-context";
import api from "../utils/api";

const token = localStorage.getItem("token");

const initialState = {
  logged: token !== null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        logged: true,
      };
    case "logout":
      return {
        ...state,
        logged: false,
      };
    case "register":
      return {
        ...state,
        logged: true,
      };
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = (user) => {
    return api
      .register(user)
      .then(({ token }) => {
        dispatch({ type: "register" });
        localStorage.setItem("token", token);
        return token;
      })
      .catch((error) => {
        dispatch({ type: "logout" });
        throw error;
      });
  };

  const login = ({ email, password }) => {
    api
      .logIn({ email, password })
      .then(({ token }) => {
        dispatch({ type: "login" });
        localStorage.setItem("token", token);
      })
      .catch((error) => dispatch({ type: "logout" }));
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
