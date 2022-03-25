import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Navigator from "./routes/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
