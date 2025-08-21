// src/services/API.js
import axios from "axios";

// asalin URL na backend
const API = axios.create({
  baseURL: "https://sunna-datasub-backend.com/api",
  headers: { "Content-Type": "application/json" },
});

// Generic request function
const request = async (method, endpoint, data = null) => {
  try {
    const res = await API({ method, url: endpoint, data });
    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
};

// ========== SPECIFIC ROUTES ========== //

// login user
export const login = (credentials) => request("post", "/login", credentials);

// samun bundles
export const getBundles = () => request("get", "/bundles");

// sayan data
export const buyData = (payload) => request("post", "/buy", payload);

// samun history
export const getTransactions = () => request("get", "/transactions");

// Export duka
export default {
  login,
  getBundles,
  buyData,
  getTransactions,
  request, // don flexibility idan kana buƙatar endpoint sabo
};
