import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { arrayRoutes } from "./arrayRoutes";
import { LoginContext } from "../context/LoginContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AdminHome from "../pages/AdminHome/AdminHome";

export const AppRouter = () => {
  const { user } = React.useContext(LoginContext);

  const appRoutes = arrayRoutes.map((route, index) => {
    if (route.path === '/admin' && user.logged && !user.admin) {
      return (
        <Route
          key={index}
          path="/home"
          element={<ProtectedRoute><Navigate to="/home" /></ProtectedRoute>}
        />
      );
    }

    if ((route.path === '/login' || route.path === '/signup' )  && ( user.logged && user.admin )) {
      return (
        <Route
          key={index}
          path="/admin"
          element={<ProtectedRoute><Navigate to="/admin" /></ProtectedRoute>}
        />
      );
    }

    if ((route.path === '/login' || route.path === '/signup' )  && ( user.logged && !user.admin )) {
      return (
        <Route
          key={index}
          path="/home"
          element={<ProtectedRoute><Navigate to="/home" /></ProtectedRoute>}
        />
      );
    }



    return <Route key={index} path={route.path} element={route.element} />;
  });

  return (    
    <Routes>
      {appRoutes}
      {user.logged ? (
        user.admin ? (
          <Route path="/" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
        ) : (
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        )
      ) : (
        <Route path="/" element={<Login />} />
      )}
    </Routes>
  );
};