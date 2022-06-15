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

// it return true or false
export const checkIsItAdmin = async (token) => {
  if (token && token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbkBnbWFpbC5jb20iLCJpZCI6Niwicm9sZXMiOlt7ImlkIjoxLCJ2YWx1ZSI6IkFETUlOIiwiZGVzY3JpcHRpb24iOiJyZ2ZnZGciLCJjcmVhdGVkQXQiOiIyMDIyLTA2LTA4VDE1OjIyOjQ0LjkyN1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTA4VDE1OjIyOjQ0LjkyN1oiLCJVc2VyUm9sZXMiOnsiaWQiOjMsInJvbGVJZCI6MSwidXNlcklkIjo2fX1dLCJpYXQiOjE2NTUyOTMwNDUsImV4cCI6MTY1NTM3OTQ0NX0.UEmHuygoNAD66F8-2Q79opk4iR_oybCuDKgPbZAumSk")
    return true;
  return false;

  const res = await axios.post(`auth/login/check-is-admin`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });
  return res.data;
}