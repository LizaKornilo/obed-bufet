// import jwt_decode from "jwt-decode";
import { axios } from "./default-axios.api";

export const login = async (data) => {
  try {
    const res = await axios.post(`auth/login`, data);
    return res.data;
  } catch (err) {
    throw "Авторизация  не прошла"
  }
}

export const checkIsItAdmin = async (token) => {
  try {
    const res = await axios.get(`users/isAdmin`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (e) {
    return false;
  }
}