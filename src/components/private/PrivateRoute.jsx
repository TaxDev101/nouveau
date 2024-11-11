import React from "react";
import { Navigate } from "react-router-dom";
import AuthApi from "../../services/AuthApi.js";

// Simuler la fonction pour vérifier si l'utilisateur est authentifié
// Dans une vraie application, vous utiliseriez le contexte de votre authentification ou une API
// const isAuthenticated = () => {
//   return !!localStorage.getItem("token"); // Exemple de vérification via un token dans le localStorage
// };

const PrivateRoute = ({ children }) => {
  return AuthApi.isAuthenticated() ? children : <Navigate to="/connexion" />;
};

export default PrivateRoute;
