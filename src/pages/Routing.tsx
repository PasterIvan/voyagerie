import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { withSuspense } from "shared/lib/hoc/withSuspence";
import { PagePreloader } from "shared/components/PagePreloader";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import { ErrorPage } from "./ErrorPage/ErrorPage";

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
      <Route
        path={RoutesPaths.Error}
        element={withSuspense(<ErrorPage />, <PagePreloader />)}
      />
      <Route
        path={RoutesPaths.NotFound}
        element={withSuspense(<NotFoundPage />, <PagePreloader />)}
      />
      <Route
        path="*"
        element={withSuspense(<NotFoundPage />, <PagePreloader />)}
      />
    </Routes>
  );
};
