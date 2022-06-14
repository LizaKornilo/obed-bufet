import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { createWrapper } from 'next-redux-wrapper'
import reducer from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const makeStore = context => createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const wrapper = createWrapper(makeStore, { debug: true });
