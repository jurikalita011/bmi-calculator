import React from "react";
import { Route, Routes } from "react-router-dom";

import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { BmiCalc } from "../pages/BmiCalc";
import { BmiHistory } from "../pages/BmiHistory";
import { UserProfile } from "../pages/UserProfile";
import { PrivateRoute } from "../components/PrivateRoute";

export const Allroutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <BmiCalc />
          </PrivateRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <BmiHistory />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
