import React, { useEffect } from "react";
import logo from "../../assets/img/illustrations/logo-dgi2.png";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import AgentSidebar from "./AgentSidebar.jsx";
import AdminSidebar from "./AdminSidebar.jsx";

const Sidebar = () => {
  const token = localStorage.getItem("token");
  let isAdmin = false;
  if (token) {
    const payload = jwtDecode(token);
    isAdmin = payload.roles.includes("ROLE_ADMIN");
  }

  useEffect(() => {
    const navbarStyle = localStorage.getItem("navbarStyle");
    if (navbarStyle && navbarStyle !== "transparent") {
      const navbar = document.querySelector(".navbar-vertical");
      if (navbar) {
        navbar.classList.add(`navbar-${navbarStyle}`);
      }
    }
  }, []);

  // Function to close the navbar
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarVerticalCollapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };
  return (
    <nav className="navbar navbar-light navbar-vertical navbar-expand-xl">
      <div className="d-flex align-items-center">
        <div className="toggle-icon-wrapper">
          <button
            className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Basculer la Navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line"></span>
            </span>
          </button>
        </div>
        <Link className="navbar-brand" to="/">
          <div className="d-flex align-items-center py-3">
            <img className="me-2" src={logo} alt="" width="40" />
            <span className="font-sans-serif">RAR</span>
          </div>
        </Link>
      </div>

      <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
        <div className="navbar-vertical-content scrollbar">
          {isAdmin && <AdminSidebar closeNavbar={closeNavbar} />}
          {!isAdmin && <AgentSidebar closeNavbar={closeNavbar} />}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
