import { addCommentApi, changeAdminAnswer, getComments } from "api/comments.api";

export const fetchComments = (token) => {
  return async (dispatch) => {
    try {
      const response = await getComments(token);
      dispatch({
        type: "FETCH_COMMENTS",
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_COMMENTS_ERROR",
        payload: "Произошла ошибка при загрузке отзывов",
      });
    }
  }
}

export const addCommentActionCreator = (commentToAdd) => {
  return async (dispatch) => {
    try {
      const request = await addCommentApi(commentToAdd);
      dispatch({
        type: "ADD_COMMENT",
        payload: request,
      });
    } catch (e) {
    }
  }
}

export const changeAdminAnswerActionCreator = (commentId, adminAnswerDto, token) => {
  return async (dispatch) => {
    try {
      await changeAdminAnswer(commentId, adminAnswerDto, token);
      dispatch({
        type: "CHANGE_ADMIN_ANSWER",
        payload: { commentId, adminAnswerDto },
      });
    } catch (e) {
    }
  }
}
