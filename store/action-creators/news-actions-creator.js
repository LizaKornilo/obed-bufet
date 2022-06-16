import { addNew, deleteNew, getAllNews, getSomeNews, updateNew } from "api/news.api";

export const fetchSomeNews = () => {
  return async (dispatch) => {
    try {
      const response = await getSomeNews();
      dispatch({
        type: "FETCH_SOME_NEWS",
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_SOME_NEWS_ERROR",
        payload: "Произошла ошибка при загрузке новостей",
      });
    }
  }
}

export const fetchAllNews = () => {
  return async (dispatch) => {
    try {
      const response = await getAllNews();
      dispatch({
        type: "FETCH_ALL_NEWS",
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_ALL_NEWS_ERROR",
        payload: "Произошла ошибка при загрузке новостей",
      });
    }
  }
}

export const addNewActionCreator = (createNewDto, formData, token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "ADD_NEW",
        payload: createNewDto,
      });
      await addNew(formData, token);
    } catch (e) {
      console.log("ERROR_______________________:", e);
    }
  }
}

export const editNewActionCreator = (newId, updateNewDto, formData, token) => {
  return async (dispatch) => {
    try {
      console.log("newId", newId);
      console.log("updateNewDto", updateNewDto);
      console.log("formData", formData);
      await updateNew(newId, formData, token);
      const response = await getAllNews();
      dispatch({
        type: "FETCH_ALL_NEWS",
        payload: response,
      });
      dispatch({
        type: "UPDATE_NEW",
        payload: { newId, updateNewDto },
      });
      
    } catch (e) {
    }
  }
}
export const deleteNewActionCreator = (newId, token) => {
  return async (dispatch) => {
    try {
      console.log("token: ", token)
      dispatch({
        type: "DELETE_NEW",
        payload: newId,
      });
      await deleteNew(newId, token);
    } catch (e) {
    }
  }
}
