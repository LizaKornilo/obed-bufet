import { addDish, deleteDish, getCategories, getDishesListByCategoryId, getNExampleDishes, updateDish } from "api/dishes.api";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await getCategories();
      dispatch({
        type: "FETCH_CATEGORIES",
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_CATEGORIES_ERROR",
        payload: "Произошла ошибка при загрузке категорий",
      });
    }
  }
}

export const fetchExampleDishes = () => {
  return async (dispatch) => {
    try {
      const response = await getNExampleDishes();
      dispatch({
        type: "FETCH_EXAMPLE_DISHES",
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_EXAMPLE_DISHES_ERROR",
        payload: "Произошла ошибка при загрузке блюд",
      });
    }
  }
}

// export const changeOpenedCategory = (category) => {
//   return {
//     type: "CHANGE_OPENED_CATEGORY",
//     payload: category,
//   };
// }

export const fetchLunchesDishesList = () => {
  return async (dispatch) => {
    try {
      const response = await getDishesListByCategoryId(1);
      dispatch({
        type: "FETCH_LUNCHES_DISHES_LIST",
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: "SET_LAUCHES_ERROR",
        payload: "Произошла ошибка при загрузке блюд категории Ланчи",
      });
    }
  }
}

export const fetchBanquetsDishesList = () => {
  return async (dispatch) => {
    try {
      const response = await getDishesListByCategoryId(2);
      dispatch({
        type: "FETCH_BANQUETS_DISHES_LIST",
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: "SET_BANQUETS_ERROR",
        payload: "Произошла ошибка при загрузке блюд категории Банкеты",
      });
    }
  }
}

// export const fetchCorporateCateringDishesList = () => {
//   return async (dispatch) => {
//     try {
//       const response = await getDishesListByCategoryId(3);
//       dispatch({
//         type: "FETCH_CORPORATE_CATERING_DISHES_LIST",
//         payload: response,
//       });
//     } catch (e) {
//       dispatch({
//         type: "SET_CORPORATE_CATERING_ERROR",
//         payload: "Произошла ошибка при загрузке блюд категории Корпоративное питание",
//       });
//     }
//   }
// }



export const addDishActionCreator = (createDishDto, formData, preliminaryImageRef, token) => {
  return async (dispatch) => {
    try {
      // if (formData.categoryId === 1) {
      //   dispatch({
      //     type: "ADD_LAUCHES_DISH",
      //     payload: { createDishDto, preliminaryImageRef },
      //   });
      // } else if (formData.categoryId === 2) {
      //   dispatch({
      //     type: "ADD_BANQUETS_DISH",
      //     payload: { createDishDto, preliminaryImageRef },
      //   });
      // }
      await addDish(formData, token);
      if (formData.categoryId === 1) {
        const response = await getDishesListByCategoryId(1);
        dispatch({
          type: "FETCH_LUNCHES_DISHES_LIST",
          payload: response,
        });
      } else if (formData.categoryId === 2) {
        const response = await getDishesListByCategoryId(2);
        dispatch({
          type: "FETCH_BANQUETS_DISHES_LIST",
          payload: response,
        });
      }

    } catch (e) {
      console.log("ERROR_______________________:", e);
    }
  }
}

export const editDishActionCreator = (dishId, updateDishDto, formData, token) => {
  return async (dispatch) => {
    try {
      if (updateDishDto.categoryId === 1) {
        dispatch({
          type: "EDIT_LAUCHES_DISH",
          payload: { dishId, updateDishDto },
        });
      } else if (updateDishDto.categoryId === 2) {
        dispatch({
          type: "EDIT_BANQUETS_DISH",
          payload: { dishId, updateDishDto },
        });
      }
      await updateDish(dishId, formData, token);
    } catch (e) {
      console.log("ERROR_______________________:", e);
    }
  }
}

export const deleteDishActionCreator = (dishId, categoryId, token) => {
  return async (dispatch) => {
    try {
      // console.log("dishId: ", dishId);
      // console.log("token: ", token);
      if (categoryId === 1) {
        dispatch({
          type: "DELETE_LAUCHES_DISH",
          payload: dishId,
        });
      } else if (categoryId === 2) {
        dispatch({
          type: "DELETE_BANQUETS_DISH",
          payload: dishId,
        });
      }

      await deleteDish(dishId, token);
    } catch (e) {
      console.log("ERROR_______________________:", e);
    }
  }
}