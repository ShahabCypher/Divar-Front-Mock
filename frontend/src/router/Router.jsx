import { Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import HomePage from "pages/HomePage";
import DashboardPage from "pages/DashboardPage";
import AuthPage from "pages/AuthPage";
import AdminPage from "pages/AdminPage";
import NotFoundPage from "pages/NotFoundPage";
import { getProfile } from "services/user";

const Router = () => {
  const queryKey = ["profile"];
  const queryFn = () => getProfile();
  const { data, isPending } = useQuery({ queryKey, queryFn });

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
