import React, { useState } from "react";
import PaginatedTable from "../../../components/table/PaginatedTable.jsx";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb.jsx";

const DetailsResteARecouvrer = () => {
  const [data] = useState([
    {
      id: 1,
      qualite: "Sensible",
      autreCriter: "Critère",
      typeOrigine: "Notification",
      natureImpot: "TVA",
      anneeImposition: "2021-01-12",
      centreOrigine: "SRE 2",
      centreActuel: "DGE",
      datePriseEnCharge: "2023-02-15",
      montantInitialPrincipal: 25000000,
      montantInitialAmende: 5000000,
      montantInitialInteret: 1000000,
      dateCreation: "2024-05-20",
      montantRestePrincipal: 4000000,
      montantResteAmende: 3000000,
      montantResteInteret: 2000000,
      tp: {
        numero: 250,
        dateVisa: "2024-08-01",
        montantTpPrincipale: 5000000,
        montantTpAmende: 3000000,
        montantTpInteret: 1000000,
      },
      origine: {
        type: "Notification",
        reference: 40,
        dateOrigine: "2023-07-15",
        service: "centre fiscal",
        dateAcuse: "2023-06-15",
      },
      contribuable: {
        nif: 1856000,
        raisonSocial: "Oscar Dos Santos",
        personnaliteJuridique: "Bon",
        formeJuridique: "Forme",
        unite_operationnelle: {
          nom: "DGE",
          dri: {
            code: 5262,
          },
        },
      },
    },
    {
      id: 2,
      qualite: "Sensible",
      autreCriter: "Critère",
      typeOrigine: "Notification",
      natureImpot: "IR",
      anneeImposition: "2021-01-12",
      centreOrigine: "SRE 2",
      centreActuel: "DGE",
      datePriseEnCharge: "2023-02-15",
      montantInitialPrincipal: 25000000,
      montantInitialAmende: 5000000,
      montantInitialInteret: 1000000,
      dateCreation: "2024-05-20",
      montantRestePrincipal: 4000000,
      montantResteAmende: 3000000,
      montantResteInteret: 2000000,
      tp: {
        numero: 250,
        dateVisa: "2024-08-01",
        montantTpPrincipale: 5000000,
        montantTpAmende: 3000000,
        montantTpInteret: 1000000,
      },
      origine: {
        type: "Déclaration",
        reference: 40,
        dateOrigine: "2023-07-15",
        service: "centre fiscal",
        dateAcuse: "2023-06-15",
      },
      contribuable: {
        nif: 1756000,
        raisonSocial: "Donnat Rhm",
        personnaliteJuridique: "Bon",
        formeJuridique: "Forme",
        unite_operationnelle: {
          nom: "DGE",
          dri: {
            code: 5262,
          },
        },
      },
    },
  ]);

  // Colonnes à afficher
  const columns = [
    { key: "nif", label: "NIF" },
    { key: "raison_social", label: "Raison Sociale" },
    { key: "origine", label: "Origine" },
    { key: "nature_impot", label: "Nature" },
  ];

  return (
    <>
      <BreadCrumb
        title="États des Saisies"
        text="État des saisies des restes à recouvrer par unité opérationnelle, par DRI et par mois"
      />
      <PaginatedTable
        data={data.map((item) => ({
          id: item.id,
          nif: item.contribuable.nif,
          raison_social: item.contribuable.raisonSocial,
          origine: item.origine.type,
          nature_impot: item.natureImpot,
        }))}
        columns={columns}
        initialItemsPerPage={5}
        title="Liste des saisies"
        linkColumn={{
          key: "raison_social",
          link: (items) => `/details-reste/${items.id}`,
        }}
      />
    </>
  );
};

export default DetailsResteARecouvrer;
