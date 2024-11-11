import flatpickr from "flatpickr";
import React, { useEffect, useRef, useState } from "react";
import "../../../../assets/css/stylet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

const ResteParUO = () => {
  // État pour l'onglet actif
  const [activeTab, setActiveTab] = useState("contribuable");

  // Un état unique pour tous les inputs
  const [disabledFields, setDisabledFields] = useState({
    nature: true,
    date: true,
    numero: true,
    montantPrincipale: true,
    montantAmende: true,
    montantInteret: true,
  });

  const dateInputRef = useRef(null); // Référence à l'élément input
  const userRole = "ROLE_AGENT"; // Role de l'utilisateur connécté

  // Fonction pour changer l'onglet actif
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Fonction pour gérer l'activation/désactivation des champs
  const toggleField = (field) => {
    setDisabledFields((prevState) => ({
      ...prevState,
      [field]: !prevState[field], // Inverse l'état du champ spécifique
    }));
  };

  useEffect(() => {
    if (dateInputRef.current) {
      flatpickr(dateInputRef.current, {
        dateFormat: "Y-m-d",
        enableTime: true,
        minDate: "today",
        defaultDate: new Date(),
        onChange: (selectedDates, dateStr) => {
          console.log("Date sélectionnée:", dateStr);
        },
      });
    }
  }, []);

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-keyboard="false"
      data-bs-backdrop="static"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl mt-6" role="document">
        <div className="modal-content border-0">
          <div className="position-absolute top-0 end-0 mt-3 me-3 z-index-1">
            <button
              className="btn-close btn btn-sm btn-circle d-flex flex-center transition-base"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-0">
            <div className="bg-light rounded-top-lg py-3 ps-4 pe-6">
              <h4 className="mb-1" id="staticBackdropLabel">
                Détails d'un reste à recouvrer du Contribuable
              </h4>
              <p className="fs--2 mb-0">OREA ROROS</p>
            </div>
            <div className="p-4">
              <div className="row">
                <div className="col-lg-3">
                  {/* <h6 className="mt-5 mt-lg-0">Informations</h6> */}
                  <ul className="nav nav-tab flex-lg-column fs--1">
                    <li className="nav-item me-2 me-lg-0">
                      <a
                        className={`nav-link nav-link-card-details ${
                          activeTab === "contribuable" ? "active" : ""
                        }`}
                        href="#!"
                        onClick={() => handleTabClick("contribuable")}
                      >
                        <span className="fas fa-user me-2"></span>Contribuable
                      </a>
                    </li>
                    <li className="nav-item me-2 me-lg-0">
                      <a
                        className={`nav-link nav-link-card-details ${
                          activeTab === "creance" ? "active" : ""
                        }`}
                        href="#!"
                        onClick={() => handleTabClick("creance")}
                      >
                        <span className="fas fa-wallet me-2"></span>Créance
                      </a>
                    </li>
                    <li className="nav-item me-2 me-lg-0">
                      <a
                        className={`nav-link nav-link-card-details ${
                          activeTab === "tp" ? "active" : ""
                        }`}
                        href="#!"
                        onClick={() => handleTabClick("tp")}
                      >
                        <span className="fas fa-receipt me-2"></span>TP
                      </a>
                    </li>
                    <li className="nav-item me-2 me-lg-0">
                      <a
                        className={`nav-link nav-link-card-details ${
                          activeTab === "atd" ? "active" : ""
                        }`}
                        href="#!"
                        onClick={() => handleTabClick("atd")}
                      >
                        <span className="fas fa-file-alt me-2"></span>ATD
                      </a>
                    </li>
                    <li className="nav-item me-2 me-lg-0">
                      <a
                        className={`nav-link nav-link-card-details ${
                          activeTab === "apurement" ? "active" : ""
                        }`}
                        href="#!"
                        onClick={() => handleTabClick("apurement")}
                      >
                        <span className="fas fa-balance-scale me-2"></span>
                        Apurement
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-9">
                  {activeTab === "contribuable" && (
                    <div>
                      <h5>Informations sur le Contribuable</h5>
                      <p>Détails spécifiques au contribuable ici.</p>
                    </div>
                  )}
                  {activeTab === "creance" && (
                    <div>
                      <h5>Détails de la Créance</h5>
                      <p>Détails spécifiques à la créance ici.</p>
                    </div>
                  )}
                  {activeTab === "tp" && (
                    <div>
                      <h5>Détails de TP</h5>
                      <p>Détails spécifiques au TP ici.</p>
                    </div>
                  )}
                  {activeTab === "atd" && (
                    <div>
                      <h5>Détails de l'ATD</h5>
                      <p>Détails spécifiques à l'ATD ici.</p>
                    </div>
                  )}
                  {activeTab === "apurement" && (
                    <div>
                      <h5>Détails de l'Apurement</h5>
                      <form className="row g-3">
                        <div className="col-md-4">
                          <label className="form-label" htmlFor="nature">
                            Nature
                          </label>
                          <div className="input-group">
                            <input
                              disabled={disabledFields.nature}
                              className="form-control"
                              id="nature"
                              type="text"
                              defaultValue="Nature"
                            />
                            {userRole === "ROLE_AGENT" && (
                              <span
                                style={{ cursor: "pointer", zIndex: 9999 }}
                                onClick={() => toggleField("nature")}
                                className="position-absolute top-50 end-0 translate-middle-y me-3"
                              >
                                <FontAwesomeIcon
                                  icon={
                                    disabledFields.nature ? faEdit : faCheck
                                  }
                                  style={{
                                    color: disabledFields.nature ? "" : "green",
                                  }}
                                />
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label className="form-label" htmlFor="nature">
                            Numéro
                          </label>
                          <div className="input-group">
                            <input
                              disabled={disabledFields.numero}
                              className="form-control"
                              id="nature"
                              type="text"
                              defaultValue="Numéro"
                            />
                            {userRole === "ROLE_AGENT" && (
                              <span
                                style={{ cursor: "pointer", zIndex: 9999 }}
                                onClick={() => toggleField("numero")}
                                className="position-absolute top-50 end-0 translate-middle-y me-3"
                              >
                                <FontAwesomeIcon
                                  icon={
                                    disabledFields.numero ? faEdit : faCheck
                                  }
                                  style={{
                                    color: disabledFields.numero ? "" : "green",
                                  }}
                                />
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label className="form-label" htmlFor="date">
                            Date
                          </label>
                          <div className="input-group">
                            <input
                              ref={dateInputRef}
                              disabled={disabledFields.date}
                              className="form-control"
                              id="date"
                              type="text"
                              defaultValue="2024-09-25"
                            />
                            <span
                              style={{ cursor: "pointer", zIndex: 9999 }}
                              onClick={() => toggleField("date")}
                              className="position-absolute top-50 end-0 translate-middle-y me-3"
                            >
                              <FontAwesomeIcon
                                icon={disabledFields.date ? faEdit : faCheck}
                                style={{
                                  color: disabledFields.date ? "" : "green",
                                }}
                              />
                            </span>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <label
                            className="form-label"
                            htmlFor="montantPrincipale"
                          >
                            Montant Principale
                          </label>
                          <div className="input-group">
                            <input
                              disabled={disabledFields.montantPrincipale}
                              className="form-control"
                              id="montantPrincipale"
                              type="text"
                              defaultValue="1 000 000 Ar"
                            />
                            {userRole === "ROLE_AGENT" && (
                              <span
                                style={{ cursor: "pointer", zIndex: 9999 }}
                                onClick={() => toggleField("montantPrincipale")}
                                className="position-absolute top-50 end-0 translate-middle-y me-3"
                              >
                                <FontAwesomeIcon
                                  icon={
                                    disabledFields.montantPrincipale
                                      ? faEdit
                                      : faCheck
                                  }
                                  style={{
                                    color: disabledFields.montantPrincipale
                                      ? ""
                                      : "green",
                                  }}
                                />
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label" htmlFor="montantAmende">
                            Montant Amende
                          </label>
                          <div className="input-group">
                            <input
                              disabled={disabledFields.montantAmende}
                              className="form-control"
                              id="montantAmende"
                              type="text"
                              defaultValue="1 000 000 Ar"
                            />
                            {userRole === "ROLE_AGENT" && (
                              <span
                                style={{ cursor: "pointer", zIndex: 9999 }}
                                onClick={() => toggleField("montantAmende")}
                                className="position-absolute top-50 end-0 translate-middle-y me-3"
                              >
                                <FontAwesomeIcon
                                  icon={
                                    disabledFields.montantAmende
                                      ? faEdit
                                      : faCheck
                                  }
                                  style={{
                                    color: disabledFields.montantAmende
                                      ? ""
                                      : "green",
                                  }}
                                />
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="col-md-4">
                          <label
                            className="form-label"
                            htmlFor="montantInteret"
                          >
                            Montant Intérêt
                          </label>
                          <div className="input-group">
                            <input
                              disabled={disabledFields.montantInteret}
                              className="form-control"
                              id="montantInteret"
                              type="text"
                              defaultValue="1 000 000 Ar"
                            />
                            {userRole === "ROLE_AGENT" && (
                              <span
                                style={{ cursor: "pointer", zIndex: 9999 }}
                                onClick={() => toggleField("montantInteret")}
                                className="position-absolute top-50 end-0 translate-middle-y me-3"
                              >
                                <FontAwesomeIcon
                                  icon={
                                    disabledFields.montantInteret
                                      ? faEdit
                                      : faCheck
                                  }
                                  style={{
                                    color: disabledFields.montantInteret
                                      ? ""
                                      : "green",
                                  }}
                                />
                              </span>
                            )}
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="modal-footer bg-light px-4 py-3">
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
            <button className="btn btn-primary" type="button">
              Enregistrer
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ResteParUO;
