import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: "https://pcmarkt.herokuapp.com",
  headers: {
    common: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  },
});
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

async function logIn(user) {
  try {
    const { data } = await api.post("/login/login", user);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function register(user) {
  try {
    const { data } = await api.post("/login/register", user);
    return data;
  } catch (error) {
    throw error;
  }
}

export default { logIn, register };
