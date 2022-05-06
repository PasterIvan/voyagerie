import "./styles/index.scss";
import { Routing } from "../pages/Routing";
import { withProviders } from "./providers";
import { Footer } from "widgets/Footer/Footer";

function App() {
  return (
    <>
      <Routing />
      <Footer />
    </>
  );
}

export default withProviders(App);
