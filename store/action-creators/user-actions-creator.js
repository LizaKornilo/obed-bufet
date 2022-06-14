import { checkIsItAdmin } from "api/user.api";

export const setIsAdmin = (isAdmin) => {
  return {
    type: "SET_IS_ADMIN",
    payload: isAdmin,
  };
}

export const checkIsItAdminActionCreator = (token) => {
  return async (dispatch) => {
    try {
      const response = await checkIsItAdmin(token);
      dispatch(setIsAdmin(response));
    } catch (e) {
      console.log(e);
    }
  }
}