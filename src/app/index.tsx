import "./styles/index.scss";
import { Routing } from "../pages/Routing";
import { withProviders } from "./providers";

function App() {
  return <Routing />;
}

export default withProviders(App);
