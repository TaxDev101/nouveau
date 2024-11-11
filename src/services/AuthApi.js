import axios from "axios";
import { jwtDecode } from "jwt-decode";

function logout() {
  window.localStorage.removeItem("token");
  delete axios.defaults.headers["Authorization"];
}

function authenticate(credentials) {
  return axios
    .post("http://localhost:8001/api/login", credentials)
    .then((response) => response.data.token)
    .then((token) => {
      //On stoke le token dans le localstorage
      window.localStorage.setItem("token", token);
      //On previent axios qu'on a maintenant un header par défaut sur toutes les futures requêtes
      setAxionToken(token);
    });
}

function setAxionToken(token) {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
}

function setup() {
  //Voir si on a un token
  const token = window.localStorage.getItem("token");
  //Si le token est encore valide
  if (token) {
    const { exp: expiration } = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      setAxionToken(token);
    } else {
      delete axios.defaults.headers["Authorization"];
    }
  }
}

function isAuthenticated() {
  //Voir si on a un token
  const token = window.localStorage.getItem("token");
  //Si le token est encore valide
  if (token) {
    const { exp: expiration } = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

export default { authenticate, logout, setup, isAuthenticated };
