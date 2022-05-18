import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { withSuspense } from "shared/lib/lib/withSuspence";
import { PagePreloader } from "shared/components/PagePreloader";

const FormPage = React.lazy(() => import("./FormPage/FormPage"));
const LocationPage = React.lazy(() => import("./LocationPage/LocationPage"));
const PlacePage = React.lazy(() => import("./PlacePage/PlacePage"));
const MainPage = React.lazy(() => import("./MainPage/MainPage"));

export const Routing = () => {
  return (
    <Routes>
      <Route
        path={RoutesPaths.Main}
        element={withSuspense(<MainPage />, <PagePreloader />)}
      />
      <Route
        path={`${RoutesPaths.Location}/:id`}
        element={withSuspense(<LocationPage />, <PagePreloader />)}
      />
      <Route
        path={`${RoutesPaths.Place}/:id/order`}
        element={withSuspense(<FormPage />, <PagePreloader />)}
      />
      <Route
        path={`${RoutesPaths.Place}/:id`}
        element={withSuspense(<PlacePage />, <PagePreloader />)}
      />
    </Routes>
  );
};
