import { useEffect } from "react";
import AnchorJS from "anchor-js";
import "./assets/overlayscrollbars/OverlayScrollbars.min.css";
import "flatpickr/dist/flatpickr.min.css";
import "./assets/js/config.js";
// import "./assets/js/flatpickr.js";
import "./assets/overlayscrollbars/OverlayScrollbars.min.js";
import "./assets/popper/popper.min.js";
import "./assets/fontawesome/all.min.js";
import "./assets/bootstrap/bootstrap.min.js";
import "./assets/echarts/echarts.min.js";
import "./assets/lodash/lodash.min.js";
import "./assets/js/theme.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Login from "./pages/auth/Login.jsx";
import AuthApi from "./services/AuthApi.js";
import PrivateRoute from "./components/private/PrivateRoute.jsx";
import { AuthProvider } from "./context/AppContext.jsx";

AuthApi.setup();

function App() {
  useEffect(() => {
    const anchors = new AnchorJS();
    anchors.options = {
      icon: "#",
    };
    anchors.add("[data-anchor]");
  }, []);
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/connexion" name="LoginPage" element={<Login />} /> */}
          <Route path="*" name="Home" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
