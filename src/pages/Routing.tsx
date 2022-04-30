import { Route, Routes } from "react-router-dom";
import { MainPage } from "./MainPage/MainPage";
import { PlacePage } from "./PlacePage/PlacePage";

export enum routes {
  main = "/",
  place = "/place",
}

export const Routing = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<MainPage />} />
      <Route path={`${routes.place}/:id`} element={<PlacePage />} />
    </Routes>
  );
};
