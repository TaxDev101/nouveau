import { Link } from "react-router-dom";

const AdminSidebar = ({ closeNavbar }) => {
  return (
    <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
      {/* Tableau de bord */}
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/"
          role="button"
          aria-expanded="false"
          onClick={closeNavbar}
        >
          <div className="d-flex align-items-center">
            <span className="nav-link-icon">
              <span className="fas fa-chart-pie"></span>
            </span>
            <span className="nav-link-text ps-1">Tableau de Bord</span>
          </div>
        </Link>
      </li>
      {/* Général ou app */}
      <li className="nav-item">
        <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
          <div className="col-auto navbar-vertical-label">App</div>
          <div className="col ps-0">
            <hr className="mb-0 navbar-vertical-divider" />
          </div>
        </div>
        {/* Restes à recouvrer */}
        <a
          className="nav-link dropdown-indicator"
          href="#rar"
          role="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-controls="rar"
        >
          <div className="d-flex align-items-center">
            <span className="nav-link-icon">
              <span className="fas fa-users"></span>
            </span>
            <span className="nav-link-text ps-1">Gestion des Utilisateurs</span>
          </div>
        </a>
        <ul className="nav collapse false" id="rar">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/admin/utilisateurs"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Listes des utilisateurs
                </span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/admin/utilisateurs/ajouter"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Ajouter un Utilisateur
                </span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/admin/utilisateurs/roles-permissions"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Gestion des Rôles et Permissions
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default AdminSidebar;
