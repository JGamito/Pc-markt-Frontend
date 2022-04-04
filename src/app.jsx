import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Navigator from "./routes/routes";
import AuthProvider from "./providers/auth-provider";
function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Navigator />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
