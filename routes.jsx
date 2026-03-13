import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./src/layout/MainLayout";
import HomePage from "./src/pages/HomePage";
import About from "./src/pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
