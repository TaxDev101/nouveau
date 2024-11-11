import React from "react";
import { useParams } from "react-router-dom";
import ContribuableDetails from "./ContribuableDetails.jsx";

const Reste = () => {
  const donne = [
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
      montantInitialAmende: 4000000,
      montantInitialInteret: 1000000,
      dateCreation: "2024-05-20",
      montantRestePrincipal: 4000000,
      montantResteAmende: 3000000,
      montantResteInteret: 2000000,
      tp: {
        numero: 250,
        dateVisa: "2024-08-01",
        montantTpPrincipale: 4000000,
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
  ];
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const data = donne.find((item) => item.id === parseInt(id)); // Trouve l'élément par ID

  if (!data) {
    return <div>Aucun contribuable trouvé avec cet ID.</div>;
  }
  return <ContribuableDetails key={data.id} data={data} />;
};

export default Reste;
