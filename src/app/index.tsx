import "./styles/index.scss";
import { Routing } from "../pages/Routing";
import { withProviders } from "./providers";
import "swiper/css";
import { Footer } from "widgets/Footer/Footer";

function App() {
  return (
    <div>
      <Routing />
      <Footer />
    </div>
  );
}

export default withProviders(App);
