import "./styles/index.scss";
import { Routing } from "../pages/Routing";
import { withProviders } from "./providers";
import { Footer } from "widgets/Footer/Footer";
import { Modals } from "pages/Modals";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Modals />
      <Routing />
      <Footer />
    </div>
  );
}

export default withProviders(App);
