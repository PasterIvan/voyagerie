import { Route, Routes } from "react-router-dom";
import { MainPage } from "./MainPage/MainPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/place" element={<MainPage />} />
    </Routes>
  );
};
