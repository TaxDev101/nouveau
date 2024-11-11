import { useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const login = async (email, password) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      } else {
        throw new Error("Erreur de connexion");
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
      throw error;
    }
  };
};
