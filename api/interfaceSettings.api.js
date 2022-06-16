import { axios } from "./default-axios.api";

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const getAllInterfaceSettings = async () => {
  try {
    const response = await axios.get(`interfaceSettings`);
    const stateFromResponse = response.data.reduce((state, item) => {
      IsJsonString(item.value)
        ? state[item.key] = JSON.parse(item.value)
        : state[item.key] = item.value;
      return state;
    }, {});
    return stateFromResponse;
  } catch (err) {
    return [];
  }
}

export const updateInterfaceSettings = async (key, value, token) => {
  try {
    await axios.post(`interfaceSettings/edit`, {
      key, value
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  } catch (err) {
  }
}

export const updateInterfaceSettingsWithImages = async (key, value, token) => {
}

export const updateInterfaceSettingsWithImage = async (data, token) => {
  try {
    await axios.put(`interfaceSettings/edit-image`, data, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  } catch (err) {
  }
}
