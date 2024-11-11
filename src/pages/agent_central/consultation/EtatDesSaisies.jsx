import React from "react";
import cornerImage from "../../../assets/img/icons/spot-illustrations/corner-4.png";
import PaginatedTable from "../../../components/table/PaginatedTable.jsx";

const EtatDesSaisies = () => {
  const data = [
    {
      id: 1,
      etat: "validé",
      date: "2024-09-30",
      unite_operationnelle: {
        nom: "UO 1",
        dri: {
          code: 5262,
          libele: "DRI 1",
        },
      },
    },
    {
      id: 2,
      etat: "non validé",
      date: "",
      unite_operationnelle: {
        nom: "UO 2",
        dri: {
          code: 5262,
          libele: "DRI 2",
        },
      },
    },
    {
      id: 3,
      etat: "Non validé",
      date: "",
      unite_operationnelle: {
        nom: "UO 3",
        dri: {
          code: 5262,
          libele: "DRI 3",
        },
      },
    },
  ];

  // Colonnes à afficher
  const columns = [
    { key: "dri", label: "DRI" },
    { key: "unite_operationnelle", label: "Unités Opérationnelles" },
    { key: "etat", label: "Etat" },
    { key: "date_validation", label: "Date de Validation" },
  ];
  return (
    <>
      <div className="card mb-3">
        <div
          className="bg-holder d-none d-lg-block bg-card"
          style={{ backgroundImage: `url(${cornerImage})` }}
        ></div>

        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8">
              <h3>Etat des saisies des restes à recouvrer</h3>
              <p className="mt-2">Unités Opérationnelles : 003/113</p>
            </div>
          </div>
          <form action="" className="row g-2">
            <div className="col-md-3">
              <select className="form-select form-select-sm">
                <option>Septembre</option>
                <option>Janvier</option>
                <option>Février</option>
                <option>Mars</option>
                <option>Avril</option>
                <option>Mai</option>
                <option>Juin</option>
                <option>Juillet</option>
                <option>Août</option>
                <option>Octobre</option>
                <option>Novembre</option>
                <option>Décembre</option>
              </select>
            </div>
            <div className="col-md-2">
              <select className="form-select form-select-sm">
                <option>2024</option>
                <option>2022</option>
                <option>2023</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <PaginatedTable
        data={data.map((item) => ({
          id: item.id,
          dri: item.unite_operationnelle.dri.libele,
          unite_operationnelle: item.unite_operationnelle.nom,
          etat: item.etat,
          date_validation: item.date ? item.date : "non renseigné",
        }))}
        columns={columns}
        initialItemsPerPage={5}
        title="Etat des saisies"
        linkColumn={{
          key: "unite_operationnelle",
          link: (item) => `/restes-par-uo/${item.id}`,
        }}
      />
    </>
  );
};

export default EtatDesSaisies;
