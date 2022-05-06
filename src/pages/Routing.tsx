import { Route, Routes } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { MainPage } from "./MainPage/MainPage";
import { LocationPage } from "./LocationPage/LocationPage";
import { FormPage } from "./FormPage/FormPage";
import { PlacePage } from "./PlacePage/PlacePage";

export const Routing = () => {
  return (
    <Routes>
      <Route path={RoutesPaths.Main} element={<MainPage />} />
      <Route path={`${RoutesPaths.Location}/:id`} element={<LocationPage />} />
      <Route path={`${RoutesPaths.Place}/:id/order`} element={<FormPage />} />
      <Route path={`${RoutesPaths.Place}/:id`} element={<PlacePage />} />
    </Routes>
  );
};
