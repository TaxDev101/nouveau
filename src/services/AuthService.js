export const login = async (email, password) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
    } else {
      console.error("Erreur de connexion", data);
    }
  } catch (error) {
    console.error(`Erreur réseau: ${error}`);
  }
};

export const fetchProtectedData = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Pas de token disponible");
  }
  try {
    const response = await fetch("https://api.com/api/protected-endpoint", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
  } catch (error) {
    throw error;
  }
};
