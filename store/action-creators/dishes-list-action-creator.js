export const setLaunshDishesActionCreator = (dishes) => {
  return {
    type: "SET_LAUNCH_DISHES",
    payload: dishes,
  };
}
export const setBanquetDishesActionCreator = (dishes) => {
  return {
    type: "SET_BANQUET_DISHES",
    payload: dishes,
  };
}
export const addLaunshDishActionCreator = (dish) => {
  return {
    type: "ADD_LAUNCH_DISH",
    payload: dish,
  };
}
export const addBanquetDishActionCreator = (dish) => {
  return {
    type: "ADD_BANQUET_DISH",
    payload: dish,
  };
}
export const deleteLaunshDishActionCreator = (dish) => {
  return {
    type: "DELETE_LAUNCH_DISH",
    payload: dish,
  };
}
export const deleteBanquetDishActionCreator = (dish) => {
  return {
    type: "DELETE_BANQUET_DISH",
    payload: dish,
  };
}