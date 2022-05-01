import { Route, Routes } from "react-router-dom";
import { HostelPage } from "./HostelPage/HostelPage";
import { MainPage } from "./MainPage/MainPage";
import { PlacePage } from "./PlacePage/PlacePage";

export enum routes {
  main = "/",
  place = "/place",
  hostel = "/hostel",
}

export const Routing = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<MainPage />} />
      <Route path={`${routes.place}/:id`} element={<PlacePage />} />
      <Route path={`${routes.hostel}/:id`} element={<HostelPage />} />
    </Routes>
  );
};
