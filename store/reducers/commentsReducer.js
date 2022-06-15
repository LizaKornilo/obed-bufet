const initialState = {
  comments: [],
  fetchingCommentsError: null,
  addCommentError: null,
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return { ...state, comments: action.payload };
    case 'FETCH_COMMENTS_ERROR':
      return { ...state, fetchingCommentsError: action.payload };
    case 'ADD_COMMENT':
      return { ...state, comments: [...state.comments, action.payload] };
    case 'SET_ADD_COMMENT_ERROR':
      return { ...state, addCommentError: action.payload };
    case 'CHANGE_ADMIN_ANSWER': {
      const commentsCopy = JSON.parse(JSON.stringify(state.comments));
      for (let i = 0; i < commentsCopy.length; i++) {
        if (commentsCopy[i].id === action.payload.commentId) {
          commentsCopy[i] = {
            ...commentsCopy[i],
            adminAnswer: action.payload.adminAnswerDto.adminMessage,
          }
        }
      }
      return { ...state, comments: commentsCopy };
    }
    default:
      return state;
  }
};