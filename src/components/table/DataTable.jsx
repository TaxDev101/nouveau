import React from "react";

const DataTable = ({ data }) => {
  return (
    <table className="table table-bordered table-striped fs--1 mb-0">
      <thead className="bg-200 text-900">
        <tr>
          <th className="sticky-header nif">NIF</th>
          <th className="sticky-header raison-sociale">RAISON SOCIALE</th>
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
          <th className="text-center">Principale</th>
          <th className="text-center">Amende</th>
          <th className="text-center">Intérêt</th>
        </tr>
      </thead>
      <tbody className="list">
        {data.map((row, index) => (
          <tr key={index}>
            <td className="sticky-cell nif">{row.nif}</td>
            <td className="sticky-cell raison-sociale">{row.raison_sociale}</td>
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
            <td className="text-center">{row.restes2.principale}</td>
            <td className="text-center">{row.restes2.amende}</td>
            <td className="text-center">{row.restes2.interet}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
