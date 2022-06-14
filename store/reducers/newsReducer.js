// interface new{
//   id: Number,  
//   imageRef: String,
//   title: String,
//   subtitle?: string,
//   description: String,
// }
import { v4 } from "uuid";

const initialState = {
  someNews: [],
  allNews: [],
  fetchingSomeNewsError: null,
  fetchingAllNewsError: null,
}

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SOME_NEWS':
      return { ...state, someNews: action.payload };
    case 'FETCH_ALL_NEWS':
      return { ...state, allNews: action.payload };
    case 'FETCH_SOME_NEWS_ERROR':
      return { ...state, fetchingSomeNewsError: action.payload };
    case 'FETCH_ALL_NEWS_ERROR':
      return { ...state, fetchingAllNewsError: action.payload };
    case 'ADD_NEW':
      return {
        ...state, allNews: [...state.allNews, {
          id: v4(),
          imageRef: action.payload.imageRef,
          title: action.payload.title,
          subTitle: action.payload.subTitle,
          description: action.payload.description,
        }]
      };
    case 'UPDATE_NEW': {
      const newNews = JSON.parse(JSON.stringify(state.allNews));
      for (let i = 0; i < newNews.length; i++) {
        if (newNews[i].id === action.payload.newId) {
          newNews[i] = {
            ...newNews[i],
            imageRef: action.payload.updateNewDto.imageRef ? action.payload.updateNewDto.imageRef : newDishes[i].imageRef,
            title: action.payload.updateNewDto.title,
            subTitle: action.payload.updateNewDto.subTitle,
            description: action.payload.updateNewDto.description,
          }
        }
      }
      return { ...state, allNews: newNews };
    }
    case 'DELETE_NEW':
      return { ...state, allNews: state.allNews.filter((n) => n.id !== action.payload) };
    default:
      return state;
  }
};