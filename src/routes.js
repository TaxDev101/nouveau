import React from "react";

const Home = React.lazy(() => import("./pages/agent_central/home/Home.jsx"));
const EtatDesSaisies = React.lazy(() =>
  import("./pages/agent_central/consultation/EtatDesSaisies.jsx")
);
const DetailsResteARecouvrer = React.lazy(() =>
  import("./pages/agent_central/consultation/DetailsResteARecouvrer.jsx")
);
const Reste = React.lazy(() =>
  import("./pages/agent_central/consultation/Reste.jsx")
);
const TauxDesRestesARecouvrer = React.lazy(() =>
  import("./pages/agent_central/consultation/TauxDesRestesARecouvrer.jsx")
);
const RarParTP = React.lazy(() =>
  import("./pages/agent_central/consultation/RarParTP.jsx")
);
const TauxEncaissementNouvelleCrence = React.lazy(() =>
  import(
    "./pages/agent_central/consultation/TauxEncaissementNouvelleCrence.jsx"
  )
);
const SuivieAction = React.lazy(() =>
  import("./pages/agent_central/consultation/SuivieAction.jsx")
);
const RecouvrementParAction = React.lazy(() =>
  import("./pages/agent_central/consultation/RecouvrementParAction.jsx")
);
const RarParAge = React.lazy(() =>
  import("./pages/agent_central/consultation/RarParAge.jsx")
);
const HistoriqueAction = React.lazy(() =>
  import("./pages/agent_central/consultation/HistoriqueAction.jsx")
);
const SuvieApurement = React.lazy(() =>
  import("./pages/agent_central/consultation/SuvieApurement.jsx")
);
const TauxApurement = React.lazy(() =>
  import("./pages/agent_central/consultation/TauxApurement.jsx")
);
const RarContentieux = React.lazy(() =>
  import("./pages/agent_central/consultation/RarContentieux.jsx")
);
const RarObjetOpposition = React.lazy(() =>
  import("./pages/agent_central/consultation/RarObjetOpposition.jsx")
);

const ResteARecouvrerParUO = React.lazy(() =>
  import("./pages/agent_central/consultation/ResteARecouvrerParUO.jsx")
);

const ListeUtilisateur = React.lazy(() =>
  import("./pages/admin/utilisateurs/ListeUtilisateur.jsx")
);

const routes = [
  // Routes pour Agent Central
  { path: "/", exact: true, name: "Home" },
  {
    path: "/tableau-de-bord",
    name: "Dashboard",
    element: Home,
  },
  {
    path: "/saisie-par-unite",
    name: "EtatDesSaisies",
    element: EtatDesSaisies,
  },
  {
    path: "/details-restes-a-recouvrer",
    nanme: "DetailsResteARecouvrer",
    element: DetailsResteARecouvrer,
  },
  { path: "/details-reste/:id", name: "Reste", element: Reste },
  {
    path: "/taux-recouvrement-restes",
    name: "TauxRAR",
    element: TauxDesRestesARecouvrer,
  },
  {
    path: "/restes-notifies-ou-non",
    name: "RarNotifiesOuNon",
    element: RarParTP,
  },
  {
    path: "/taux-recouvrements-nouvelles-creances",
    name: "TauxRecouvrementNouvellesCreance",
    element: TauxEncaissementNouvelleCrence,
  },
  {
    path: "/actions-recouvrement",
    name: "ActionsRecouvrement",
    element: SuivieAction,
  },
  {
    path: "/recouvrement-par-action",
    name: "RecouvrementParAction",
    element: RecouvrementParAction,
  },
  {
    path: "/reste-par-age",
    name: "ResteParAge",
    element: RarParAge,
  },
  {
    path: "/historique-action",
    name: "HistoriqueAction",
    element: HistoriqueAction,
  },
  {
    path: "/apurement-administratifs",
    name: "ApurementAdministratifs",
    element: SuvieApurement,
  },
  {
    path: "/taux-apurements-restes",
    name: "TauxApurementsRestes",
    element: TauxApurement,
  },
  {
    path: "/restes-contentieux",
    name: "RestesContentieux",
    element: RarContentieux,
  },
  {
    path: "/restes-opposition",
    name: "RestesOposition",
    element: RarObjetOpposition,
  },
  {
    path: "/restes-par-uo/:id",
    name: "ResteParUO",
    element: ResteARecouvrerParUO,
  },

  // Routes pour les administrateurs
  {
    path: "/admin/utilisateurs",
    name: "ListeUtilisateur",
    element: ListeUtilisateur,
  },
];

export default routes;
