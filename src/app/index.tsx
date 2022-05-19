import "./styles/index.scss";
import { Routing } from "../pages/Routing";
import { withProviders } from "./providers";
import { Footer } from "widgets/Footer/Footer";
import { Modals } from "widgets/modals/components";
import { Questionnaire } from "feature/questionnaire/Questionnaire";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Questionnaire />
      <Modals />
      <Routing />
      <Footer />
    </div>
  );
}

export default withProviders(App);
