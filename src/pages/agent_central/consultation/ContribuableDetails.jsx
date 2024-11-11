import { useEffect } from "react";
import "./ContribuableDetails.css";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb.jsx";

const ContribuableDetails = ({ data }) => {
  const {
    qualite,
    autreCriter,
    typeOrigine,
    natureImpot,
    anneeImposition,
    centreOrigine,
    centreActuel,
    datePriseEnCharge,
    montantInitialPrincipal,
    montantInitialAmende,
    montantInitialInteret,
    dateCreation,
    montantRestePrincipal,
    montantResteAmende,
    montantResteInteret,
    tp,
    origine,
    contribuable,
    dateAcuse,
  } = data;

  useEffect(() => {
    const cards = document.querySelectorAll(".cards");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("card-appear");
      }, index * 100);
    });
  }, []);

  return (
    <div>
      <BreadCrumb
        title="Détails d'un Reste à Recouvrer du contribuable"
        text={contribuable.raisonSocial}
      />

      <div className="row g-3">
        <div className="col-xl-4 order-xl-1">
          <div className="card">
            <div className="card-header bg-light btn-reveal-trigger d-flex flex-between-center">
              <h5 className="mb-0">Information sur le TP</h5>
            </div>
            <div className="card-body">
              <table className="table table-borderless fs--1 mb-0">
                <thead>
                  <tr className="border-bottom">
                    <th className="ps-0 pt-0">
                      Numéro du TP: {tp.numero}
                      <div className="text-400 fw-normal fs--2">
                        Date: {new Date(tp.dateVisa).toLocaleDateString()}
                      </div>
                    </th>
                  </tr>
                  <tr className="border-bottom">
                    <th className="ps-0">
                      Montant du TP
                      <div className="text-400 fw-normal fs--2">
                        (En Principale, Amende et intérêt)
                      </div>
                    </th>
                  </tr>
                  <tr className="border-bottom">
                    <th className="ps-0">
                      <span className="text-success">Principale</span>
                    </th>
                    <th className="pe-0 text-end">
                      {tp.montantTpPrincipale} MGA
                    </th>
                  </tr>
                  <tr className="border-bottom">
                    <th className="ps-0">
                      <span className="text-warning">Amende</span>
                    </th>
                    <th className="pe-0 text-end">{tp.montantTpAmende} MGA</th>
                  </tr>
                  <tr className="border-bottom">
                    <th className="ps-0">
                      <span className="text-danger">Intérêt</span>
                    </th>
                    <th className="pe-0 text-end">{tp.montantTpInteret} MGA</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light">
              <div className="fw-semi-bold">Total</div>
              <div className="fw-bold">
                {tp.montantTpPrincipale +
                  tp.montantTpInteret +
                  tp.montantTpAmende}{" "}
                MGA
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-3">
            <div className="card-header bg-light">
              <div className="row flex-between-center">
                <div className="col-sm-auto">
                  <h5 className="mb-2 mb-sm-0">
                    Informations sur le Contribuable et Origine de la Créance
                  </h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3 mb-md-0">
                  <p className="form-check-label mb-0 fw-bold d-block">
                    Contribuable
                    <span className="radio-select-content">
                      <span>
                        {contribuable.raisonSocial}
                        <br />#{contribuable.nif}
                        <br />
                        Unité Opérationnelle:{" "}
                        {contribuable.unite_operationnelle.nom}
                        <br />
                        Personnalité Juridique:{" "}
                        {contribuable.personnaliteJuridique}
                        <span className="d-block mb-0">
                          Forme Juridique: {contribuable.formeJuridique}
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="position-relative">
                    <p className="form-check-label mb-0 fw-bold d-block">
                      Origine de la créance
                      <span className="radio-select-content">
                        <span>
                          Type: {origine.type}
                          <br />
                          Référence: {origine.reference}
                          <br />
                          Service: {origine.service}
                          <span className="d-block mb-0">
                            Date:{" "}
                            {new Date(origine.dateOrigine).toLocaleDateString()}
                          </span>
                          <span className="d-block mb-0">
                            Date Acusé:{" "}
                            {new Date(origine.dateAcuse).toLocaleDateString()}
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header bg-light">
              <h5 className="mb-0">Information sur la créance</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <strong>Qualité:</strong> {qualite}
                  </p>
                  <p>
                    <strong>Autre Critère:</strong> {autreCriter}
                  </p>
                  <p>
                    <strong>Nature de l'Impôt:</strong> {natureImpot}
                  </p>
                  <p>
                    <strong>Année d'Imposition:</strong>{" "}
                    {new Date(anneeImposition).toLocaleDateString()}
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <strong>Centre d'Origine:</strong> {centreOrigine}
                  </p>
                  <p>
                    <strong>Centre Actuel:</strong> {centreActuel}
                  </p>
                  <p>
                    <strong>Date de Prise en Charge:</strong>{" "}
                    {new Date(datePriseEnCharge).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Date de Création:</strong>{" "}
                    {new Date(dateCreation).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Montants */}
              <h6 className="mt-3">Montants Initiaux</h6>
              <div className="row">
                <div className="col-md-4">
                  <p>
                    <strong>Principal:</strong> {montantInitialPrincipal} MGA
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <strong>Amende:</strong> {montantInitialAmende} MGA
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <strong>Intérêts:</strong> {montantInitialInteret} MGA
                  </p>
                </div>
              </div>

              <h6 className="mt-3">Montants Restants</h6>
              <div className="row">
                <div className="col-md-4">
                  <p>
                    <strong>Principal Restant:</strong> {montantRestePrincipal}{" "}
                    MGA
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <strong>Amende Restante:</strong> {montantResteAmende} MGA
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <strong>Intérêts Restants:</strong> {montantResteInteret}{" "}
                    MGA
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-xl-12 col-xxl-5 ps-lg-4 ps-xl-2 ps-xxl-5 text-center text-md-start text-xl-center text-xxl-start">
                <div className="border-dashed-bottom d-block d-md-none d-xl-block d-xxl-none my-4"></div>
                <div className="fs-2 fw-semi-bold">
                  TOTAL RAR:{" "}
                  <span className="text-primary">
                    {montantRestePrincipal +
                      montantResteAmende +
                      montantResteInteret}{" "}
                    MGA
                  </span>
                </div>
                <button className="btn btn-success mt-3 px-5" type="submit">
                  Exporter
                </button>
                {/* <p className="fs--1 mt-3 mb-0">
                  By clicking <strong>Confirm & Pay </strong>button you agree to
                  the <a href="#!">Terms &amp; Conditions</a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContribuableDetails;
