// interface dish{
//   imageRef: String,
//   name: String,
//   description: String,
//   price: Number,
//   weight?: String,
// }
import { v4 } from "uuid";
const initialState = {
  categories: [],
  categoriesError: null,
  exampleDishes: [],
  exampleDishesError: null,
  // openedCategory: null,
  lunchesDishesList: [],
  banquetsDishesList: [],
  // corporateCateringDishesList: [],
  lunchesError: null,
  banquetsError: null,
  // corporateCateringError: null,
}

export const dishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'FETCH_CATEGORIES_ERROR':
      return { ...state, categoriesError: action.payload };

    case 'FETCH_EXAMPLE_DISHES':
      return { ...state, exampleDishes: action.payload };
    case 'FETCH_EXAMPLE_DISHES_ERROR':
      return { ...state, exampleDishesError: action.payload };

    case 'FETCH_LUNCHES_DISHES_LIST':
      return { ...state, lunchesDishesList: action.payload };
    case 'FETCH_BANQUETS_DISHES_LIST':
      return { ...state, banquetsDishesList: action.payload };
    // case 'FETCH_CORPORATE_CATERING_DISHES_LIST':
    //   return { ...state, corporateCateringDishesList: action.payload };

    case 'SET_LAUCHES_ERROR':
      return { ...state, lunchesError: action.payload };
    case 'SET_BANQUETS_ERROR':
      return { ...state, banquetsError: action.payload };
    // case 'SET_CORPORATE_CATERING_ERROR':
    //   return { ...state, corporateCateringError: action.payload };

    // case 'CHANGE_OPENED_CATEGORY':
    //   return { ...state, openedCategory: action.payload };

    case 'ADD_LAUCHES_DISH':
      return {
        ...state, lunchesDishesList: [...state.lunchesDishesList, {
          id: v4(),
          imageRef: action.payload.preliminaryImageRef,
          name: action.payload.createDishDto.name,
          description: action.payload.createDishDto.description,
          price: action.payload.createDishDto.price,
          weight: action.payload.createDishDto.weight,
        }]
      };
    case 'EDIT_LAUCHES_DISH': {
      const newDishes = JSON.parse(JSON.stringify(state.lunchesDishesList));
      for (let i = 0; i < newDishes.length; i++) {
        if (newDishes[i].id === action.payload.dishId) {
          newDishes[i] = {
            ...newDishes[i],
            imageRef: action.payload.updateDishDto.imageRef ? action.payload.updateDishDto.imageRef : newDishes[i].imageRef,
            name: action.payload.updateDishDto.name,
            description: action.payload.updateDishDto.description,
            price: action.payload.updateDishDto.price,
            weight: action.payload.updateDishDto.weight,
          }
        }
      }
      return { ...state, lunchesDishesList: newDishes };
    }
    case 'DELETE_LAUCHES_DISH':
      return { ...state, lunchesDishesList: state.lunchesDishesList.filter((dish) => dish.id !== action.payload) };

    case 'ADD_BANQUETS_DISH':
      return {
        ...state, banquetsDishesList: [...state.banquetsDishesList, {
          id: v4(),
          imageRef: action.payload.preliminaryImageRef,
          name: action.payload.createDishDto.name,
          description: action.payload.createDishDto.description,
          price: action.payload.createDishDto.price,
          weight: action.payload.createDishDto.weight,
        }]
      };
    case 'EDIT_BANQUETS_DISH': {
      const newDishes = JSON.parse(JSON.stringify(state.banquetsDishesList));
      for (let i = 0; i < newDishes.length; i++) {
        if (newDishes[i].id === action.payload.dishId) {
          newDishes[i] = {
            ...newDishes[i],
            imageRef: action.payload.updateDishDto.imageRef ? action.payload.updateDishDto.imageRef : newDishes[i].imageRef,
            name: action.payload.updateDishDto.name,
            description: action.payload.updateDishDto.description,
            price: action.payload.updateDishDto.price,
            weight: action.payload.updateDishDto.weight,
          }
        }
      }
      return { ...state, banquetsDishesList: newDishes };
    }
    case 'DELETE_BANQUETS_DISH':
      return { ...state, banquetsDishesList: state.banquetsDishesList.filter((dish) => dish.id !== action.payload) };
    case 'ADD_BANQUETS_DISH':
      return { ...state, lunchesError: action.payload };
    case 'UPDATE_BANQUETS_DISH':
      return { ...state, lunchesError: action.payload };
    case 'DELETE_BANQUETS_DISH':
      return { ...state, lunchesError: action.payload };

    default:
      return state;
  }
};