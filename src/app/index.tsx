import "./styles/index.scss";
import { Routing } from "../pages/Routing";
import { withProviders } from "./providers";
import { Footer } from "widgets/Footer/Footer";
import { Modals } from "widgets/modals/components";
import { useEvent } from "effector-react";
import { useEffect } from "react";
import ReactModal from "react-modal";

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
