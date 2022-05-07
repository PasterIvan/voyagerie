import "./styles/index.scss";
import { Routing } from "../pages/Routing";
import { withProviders } from "./providers";
import { Footer } from "widgets/Footer/Footer";
import { Modals } from "pages/Modals";

function App() {
  return (
    <>
      <Modals />
      <Routing />
      <Footer />
    </>
  );
}

export default withProviders(App);
