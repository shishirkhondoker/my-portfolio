import { Routes, Route } from "react-router-dom";
import MainLayout from "./src/layout/MainLayout";
import HomePage from "./src/pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
