// interface dish{
//   id: Number,  
//   name: String,
//   price: string,
// }
import { v4 } from "uuid";

const initialState = {
  launchesDishes: [],
  banquetsDishes: [],
}

export const dishesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LAUNCH_DISHES':
      return { ...state, launchesDishes: action.payload };
    case 'SET_BANQUET_DISHES':
      return {...state, banquetsDishes: action.payload };
    case 'ADD_LAUNCH_DISH':
      return { ...state, launchesDishes: [...state.launchesDishes, action.payload] };
    case 'ADD_BANQUET_DISH':
      return {...state, banquetsDishes: [...state.banquetsDishes, action.payload] };
    case 'DELETE_LAUNCH_DISH':
      return { ...state, launchesDishes: state.launchesDishes.filter((n) => n.id !== action.payload) };
    case 'DELETE_BANQUET_DISH':
      return { ...state, banquetsDishes: state.banquetsDishes.filter((n) => n.id !== action.payload) };
    default:
      return state;
  }
};