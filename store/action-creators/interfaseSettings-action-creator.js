import { getAllInterfaceSettings, interfaceSettingsInServer, updateInterfaceSettings, updateInterfaceSettingsWithImage, updateInterfaceSettingsWithImages } from "api/interfaceSettings.api";

export const fetchInterfaceSettings = () => {
  return async (dispatch) => {
    try {
      const response = await getAllInterfaceSettings();
      dispatch({
        type: "FETCH_INTERFACE_SETTINGS",
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_INTERFACE_SETTINGS_ERROR",
        payload: "Произошла ошибка при загрузке настроек интерфейса",
      });
    }
  }
}

export const editInterfaceSettings = (key, value, token) => {
  return async (dispatch) => {
    try {
      console.log("key: ", key);
      console.log("value: ", value);
      await updateInterfaceSettings(key, value, token);
      dispatch({
        type: "EDIT_INTERFACE_SETTINGS",
        payload: { key, value },
      });
    } catch (e) {
      console.log("ERROR_______________________:", e);
      // dispatch({
      //   type: "FETCH_INTERFACE_SETTINGS_ERROR",
      //   payload: "Произошла ошибка при загрузке настроек интерфейса",
      // });
    }
  }
}

export const editInterfaceSettingsWithImages = (key, preliminaryImageRefs, images, token) => {
  return async (dispatch) => {
    try {
      // console.log("key: ", key);
      // console.log("preliminaryImageRefs: ", preliminaryImageRefs);
      // console.log("images: ", images);
      await updateInterfaceSettingsWithImages(key, images, token);
      dispatch({
        type: "EDIT_INTERFACE_SETTINGS",
        payload: { key, value: preliminaryImageRefs },
      });
    } catch (e) {
      console.log("ERROR_______________________:", e);
      // dispatch({
      //   type: "FETCH_INTERFACE_SETTINGS_ERROR",
      //   payload: "Произошла ошибка при загрузке настроек интерфейса",
      // });
    }
  }
}

export const editInterfaceSettingsWithImage = (key, preliminaryImageRef, image, token) => {
  return async (dispatch) => {
    try {
      // console.log("key: ", key);
      // console.log("preliminaryImageRefs: ", preliminaryImageRefs);
      // console.log("images: ", images);
      await updateInterfaceSettingsWithImage(key, image, token);
      dispatch({
        type: "EDIT_INTERFACE_SETTINGS",
        payload: { key, value: preliminaryImageRef },
      });
    } catch (e) {
      console.log("ERROR_______________________:", e);
      // dispatch({
      //   type: "FETCH_INTERFACE_SETTINGS_ERROR",
      //   payload: "Произошла ошибка при загрузке настроек интерфейса",
      // });
    }
  }
}