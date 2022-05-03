import "./styles/index.scss";
import { Routing } from "../pages/Routing";
import { withProviders } from "./providers";
import { Footer } from "widgets/Footer/Footer";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

function App() {
  return (
    <div>
      <Routing />
      <Footer />
    </div>
  );
}

export default withProviders(App);
