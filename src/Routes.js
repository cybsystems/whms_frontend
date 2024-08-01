import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

// PAGES
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Inward from "./pages/Inwards";
import Locations from "./pages/Locations";
import Parts from "./pages/Parts";
import PickingListPage from "./pages/Pickings";
import PicklistForm from "./pages/PickLists";
import Putaway from "./pages/PutAways";
import ReportsPage from "./pages/Reports";

// AUTH COMPONENTS
import PrivateRoute from "./components/PrivateRoute";
import { InwardProvider } from "./context/InwardContext";
import { LocationProvider } from "./context/LocationContext";
import { AuthContext } from "./context/AuthContext";
import Layout from "./components/Layout";

const AppRoutes = () => {
  const { authToken } = useContext(AuthContext);
  if (authToken === null) {
    return <div>Loading...</div>;
  }
  return (
    <Layout isLoggedIn={!!authToken}>
      <Routes>
        <Route path="/" element={authToken ? <Dashboard /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/pickings"
          element={
            <PrivateRoute>
              <PickingListPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/inward"
          element={
            <PrivateRoute>
              <Inward />
            </PrivateRoute>
          }
        />
        <Route
          path="/parts"
          element={
            <PrivateRoute>
              <Parts />
            </PrivateRoute>
          }
        />
        <Route
          path="/locations"
          element={
            <PrivateRoute>
              <Locations />
            </PrivateRoute>
          }
        />
        <Route
          path="/putaway"
          element={
            <PrivateRoute>
              <InwardProvider>
                <LocationProvider>
                  <Putaway />
                </LocationProvider>
              </InwardProvider>
            </PrivateRoute>
          }
        />
        <Route
          path="/picklist"
          element={
            <PrivateRoute>
              <PicklistForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <ReportsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
