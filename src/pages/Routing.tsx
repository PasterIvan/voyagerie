import { Route, Routes } from "react-router-dom";
import { RoutesPaths } from "shared/config/constants";
import { HostelPage } from "./HostelPage/HostelPage";
import { MainPage } from "./MainPage/MainPage";
import { PlacePage } from "./PlacePage/PlacePage";

export const Routing = () => {
  return (
    <Routes>
      <Route path={RoutesPaths.Main} element={<MainPage />} />
      <Route path={`${RoutesPaths.Place}/:id`} element={<PlacePage />} />
      <Route path={`${RoutesPaths.Hostel}/:id`} element={<HostelPage />} />
    </Routes>
  );
};
