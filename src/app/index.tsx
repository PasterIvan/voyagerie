import "./styles/index.scss";
import { Routing } from "../pages/Routing";
import { withProviders } from "./providers";
import { Footer } from "widgets/Footer/Footer";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scroller = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <Scroller />
      <Routing />
      <Footer />
    </>
  );
}

export default withProviders(App);
