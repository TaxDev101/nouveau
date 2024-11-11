import { Link } from "react-router-dom";

const AgentSidebar = ({ closeNavbar }) => {
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
              <span className="fas fa-file-invoice-dollar"></span>
            </span>
            <span className="nav-link-text ps-1">Reste à Recouvrer</span>
          </div>
        </a>
        <ul className="nav collapse false" id="rar">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/saisie-par-unite"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Etat des Saisies par UO/DRI
                </span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/details-restes-a-recouvrer"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Consultation des Détails des RAR
                </span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/taux-recouvrement-restes"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Consultaion du taux des RAR
                </span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/restes-notifies-ou-non"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Consultation des RAR Notifiés ou non par TP
                </span>
              </div>
            </Link>
          </li>
        </ul>
        {/* Nouvelles créances */}
        <a
          className="nav-link dropdown-indicator"
          href="#creance"
          role="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-controls="creance"
        >
          <div className="d-flex align-items-center">
            <span className="nav-link-icon">
              <span className="fas fa-file-signature"></span>
            </span>
            <span className="nav-link-text ps-1">Nouvelles Créances</span>
          </div>
        </a>
        <ul className="nav collapse false" id="creance">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/nouvelles-creance"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Consultation par Période
                </span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/taux-recouvrements-nouvelles-créances"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">Taux de Recouvrement</span>
              </div>
            </Link>
          </li>
        </ul>

        {/* Actions de Recouvrement */}
        <a
          className="nav-link dropdown-indicator"
          href="#action"
          role="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-controls="action"
        >
          <div className="d-flex align-items-center">
            <span className="nav-link-icon">
              <span className="fas fa-tasks"></span>
            </span>
            <span className="nav-link-text ps-1">Actions Recouvrement</span>
          </div>
        </a>
        <ul className="nav collapse false" id="action">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/actions-recouvrement"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Suivie des actions Entretpises
                </span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/recouvrement-par-action"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Consultation du Recouvrement par Actions
                </span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/historique-action"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Historiques des Actions
                </span>
              </div>
            </Link>
          </li>
        </ul>

        {/* Apurements Administratifs */}
        <a
          className="nav-link dropdown-indicator"
          href="#apurement"
          role="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-controls="apurement"
        >
          <div className="d-flex align-items-center">
            <span className="nav-link-icon">
              <span className="fas fa-gavel"></span>
            </span>
            <span className="nav-link-text ps-1">Apurements</span>
          </div>
        </a>
        <ul className="nav collapse false" id="apurement">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/apurement-administratifs"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Suivie des Apurements
                </span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/taux-apurements-restes"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Taux d'Apurement sur les RAR
                </span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/reste-par-age"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Consultation des RAR par Âge
                </span>
              </div>
            </Link>
          </li>
        </ul>

        {/* Litiges et Contentieux */}
        <a
          className="nav-link dropdown-indicator"
          href="#contentieux"
          role="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-controls="contentieux"
        >
          <div className="d-flex align-items-center">
            <span className="nav-link-icon">
              <span className="fas fa-balance-scale"></span>
            </span>
            <span className="nav-link-text ps-1">Contentieux</span>
          </div>
        </a>
        <ul className="nav collapse false" id="contentieux">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/restes-contentieux"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">RAR Contentieux</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/restes-opposition"
              aria-expanded="false"
              onClick={closeNavbar}
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  RAR Objet de Procédure d'Opposition
                </span>
              </div>
            </Link>
          </li>
        </ul>

        {/* Segments et Catégories */}
        <a
          className="nav-link dropdown-indicator"
          href="#segment"
          role="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-controls="segment"
        >
          <div className="d-flex align-items-center">
            <span className="nav-link-icon">
              <span className="fas fa-th-large"></span>
            </span>
            <span className="nav-link-text ps-1">Segments</span>
          </div>
        </a>
        <ul className="nav collapse false" id="segment">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/secteur-activite"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Consultation par Secteur
                </span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/nature-impot" aria-expanded="false">
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Consultation par Nature d'Impôt
                </span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/recouvrabilité"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Consultation par Recouvrabilité
                </span>
              </div>
            </a>
          </li>
        </ul>

        {/* Transferts de Dossier */}
        <a
          className="nav-link dropdown-indicator"
          href="#transfert"
          role="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-controls="transfert"
        >
          <div className="d-flex align-items-center">
            <span className="nav-link-icon">
              <span className="fas fa-exchange-alt"></span>
            </span>
            <span className="nav-link-text ps-1">Transferts de Dossiers</span>
          </div>
        </a>
        <ul className="nav collapse false" id="transfert">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/transferts-dossiers"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">Suivi des Transferts</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/actes-non-pris-en-charge"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-text ps-1">
                  Consultation des Actes d'imposition Non Pris en Charge
                </span>
              </div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default AgentSidebar;
