import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { commentsReducer } from './commentsReducer';
import { dishesListReducer } from './dishesListReduser';
import { dishesReducer } from './dishesReducer';
import { interfaceSettingsReducer } from './interfaceSettingsReducer';
import { newsReducer } from './newsReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  interfaceSettings: interfaceSettingsReducer,
  dishes: dishesReducer,
  news: newsReducer,
  comments: commentsReducer,
  user: userReducer,
  dishesList: dishesListReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export default reducer;