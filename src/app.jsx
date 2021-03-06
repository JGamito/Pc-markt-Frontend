import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Navigator from "./routes/routes";
import AuthProvider from "./providers/auth-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Navigator />
          <ToastContainer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
