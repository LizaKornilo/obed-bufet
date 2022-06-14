// import { $host } from "./default-axios.api";
// import jwt_decode from "jwt-decode";
import { axios } from "./default-axios.api";

export const login = async (password) => {
  const token = "admin.jwt." + password;
  // throw "Авторизация  не прошла"
  return {
    token: token,
    user: {
      id: 1,
      email: "admin@mail.com",
    }
  };

  // const  res = await $host.post('api/users/login', {password});
  // return jwt_decode(res.data.token); or return res.data.token;
}

// it return true or false
export const checkIsItAdmin = async (token) => {
  // const res = await $authHost.get('api/users/auth');
  if (token && token === "admin.jwt.1234")
    return true;
  return false;
}