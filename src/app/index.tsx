import "./styles/index.scss";
import { Routing } from "../pages/Routing/Routing";
import { withProviders } from "./providers";
import { Footer } from "widgets/Footer/Footer";
import { Modals } from "widgets/modals/components";
import { Questionnaire } from "feature/questionnaire/Questionnaire";

import "dayjs/locale/ru";

import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import { ErrorBoundary } from "shared/components/ErrorBoyundary";

registerLocale("ru", ru);

declare global {
  interface Window {
    __REACT_DEVELOPERS: Record<string, unknown>;
  }
}

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
