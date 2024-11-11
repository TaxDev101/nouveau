import React, { useState, forwardRef, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb.jsx";
import "../../../assets/css/ResteARecouvrerParUO.css";
import ResteParUO from "./maodal/ResteParUO.jsx";
import "../../../assets/css/animations.css"; // Assurez-vous que ce fichier contient les nouvelles animations

// Forwarding the ref to the table row
const TableRow = forwardRef(({ row, index, openRowIndex, toggleRow }, ref) => (
  <>
    <tr>
      <td className="sticky-cell nif">{row.nif}</td>
      <td className="sticky-cell raison-sociale">
        <a
          className="link-600 fw-semi-bold"
          type="button"
          onClick={() => toggleRow(index)}
        >
          {row.raison_sociale}
        </a>
      </td>
      <td className="sticky-cell origine">{row.origine}</td>
      <td className="sticky-cell nature">{row.nature}</td>
      <td className="sticky-cell annee">{row.annee}</td>
      <td className="sticky-cell mois">{row.mois}</td>
      <td className="text-center principale">{row.charges.principale}</td>
      <td className="text-center">{row.charges.amende}</td>
      <td className="text-center">{row.charges.interet}</td>
      <td className="text-center">{row.paiements.principale}</td>
      <td className="text-center">{row.paiements.amende}</td>
      <td className="text-center">{row.paiements.interet}</td>
      <td className="text-center">{row.restes.principale}</td>
      <td className="text-center">{row.restes.amende}</td>
      <td className="text-center">{row.restes.interet}</td>
    </tr>

    {/* CSSTransition animation on expanding/collapsing rows */}
    <CSSTransition
      in={openRowIndex === index}
      timeout={300}
      classNames="fade"
      unmountOnExit
      nodeRef={ref} // Use the forwarded ref here
    >
      <tr ref={ref}>
        <td colSpan="15">
          <div>
            <table className="table table-bordered table-striped fs--1 mb-0">
              <tbody>
                <tr>
                  <td>
                    <a
                      className="link-600 fw-semi-bold"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      {row.raison_sociale}
                    </a>
                  </td>
                  <td>nif</td>
                  <td>nif</td>
                  <td>nif</td>
                  <td>nif</td>
                </tr>
              </tbody>
            </table>
            <ResteParUO rowData={row} />
          </div>
        </td>
      </tr>
    </CSSTransition>
  </>
));

const ResteARecouvrerParUO = () => {
  const [openRowIndex, setOpenRowIndex] = useState(null);

  const tableData = [
    {
      nif: "4001524550",
      raison_sociale: "RANDRIAMPARANY LEON PAUL",
      origine: "Origine",
      nature: "Nature",
      annee: "2024",
      mois: "Mois",
      charges: {
        principale: "1000000",
        amende: "1000000",
        interet: "1000000",
      },
      paiements: {
        principale: "1000000",
        amende: "1000000",
        interet: "1000000",
      },
      restes: { principale: "1000000", amende: "1000000", interet: "1000000" },
    },
    {
      nif: "5000975912",
      raison_sociale: "OREA ROROS",
      origine: "Déclaration",
      nature: "Nature",
      annee: "2024",
      mois: "Mois",
      charges: {
        principale: "1000000",
        amende: "1000000",
        interet: "1000000",
      },
      paiements: {
        principale: "1000000",
        amende: "1000000",
        interet: "1000000",
      },
      restes: { principale: "1000000", amende: "1000000", interet: "1000000" },
    },
  ];

  const toggleRow = (index) => {
    setOpenRowIndex(openRowIndex === index ? null : index);
  };

  return (
    <>
      <BreadCrumb
        title="Restes à Recouvrer"
        text="Listes des restes à recouvrer"
      />

      <div className="card mb-3">
        <div className="card-header">
          <div className="row flex-between-end">
            <div className="col-auto align-self-center">
              <h5 className="mb-0">Titre</h5>
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher..."
              />
            </div>
          </div>
        </div>

        <div className="card-body pt-0">
          <div style={{ overflowX: "auto" }} className="table-responsive">
            <table className="table table-bordered table-striped fs--1 mb-0">
              <thead className="bg-200 text-900">
                <tr>
                  <th className="sticky-header nif">NIF</th>
                  <th className="sticky-header raison-sociale">
                    RAISON SOCIALE
                  </th>
                  <th className="sticky-header origine">ORIGINE</th>
                  <th className="sticky-header nature">NATURE</th>
                  <th className="sticky-header annee">ANNEE</th>
                  <th className="sticky-header mois">MOIS</th>
                  <th colSpan="3" className="text-center">
                    CHARGES INITIALES
                  </th>
                  <th colSpan="3" className="text-center">
                    PAIEMENTS
                  </th>
                  <th colSpan="3" className="text-center">
                    RESTES
                  </th>
                </tr>
                <tr>
                  <th colSpan="6" className="sticky-header vide"></th>
                  <th className="text-center principale">Principale</th>
                  <th className="text-center">Amende</th>
                  <th className="text-center">Intérêt</th>
                  <th className="text-center principale">Principale</th>
                  <th className="text-center">Amende</th>
                  <th className="text-center">Intérêt</th>
                  <th className="text-center">Principale</th>
                  <th className="text-center">Amende</th>
                  <th className="text-center">Intérêt</th>
                </tr>
              </thead>
              <tbody className="list">
                {tableData.map((row, index) => {
                  const rowRef = useRef(); // Create a ref for each row
                  return (
                    <TableRow
                      key={index}
                      row={row}
                      index={index}
                      openRowIndex={openRowIndex}
                      toggleRow={toggleRow}
                      ref={rowRef} // Pass the ref here
                    />
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex align-items-center align-items-center w-full">
              <span className="me-2">Lignes:</span>
              <select className="form-select form-select-sm">
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button
                className="btn btn-sm btn-falcon-default me-1"
                type="button"
              >
                <span className="fas fa-chevron-left"> </span>
              </button>
              <ul className="pagination mb-0">
                <li>
                  <button className="page btn btn-sm btn-falcon-default ms-1">
                    1
                  </button>
                </li>
              </ul>
              <button
                className="btn btn-sm btn-falcon-default ms-1"
                type="button"
              >
                <span className="fas fa-chevron-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResteARecouvrerParUO;
