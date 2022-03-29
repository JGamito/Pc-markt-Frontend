import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Navigator from "./routes/routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
