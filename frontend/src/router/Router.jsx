import { Routes, Route, Navigate } from "react-router-dom";
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
  const { data, isPending, error } = useQuery({ queryKey, queryFn });

  if (isPending) return <h1>Loading...</h1>;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
