const initialState = {
  isAdmin: false, // false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_ADMIN':
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
};