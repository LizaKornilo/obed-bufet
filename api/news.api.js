import { axios } from "./default-axios.api";

export const getSomeNews = async () => {
  try {
    const response = await axios.get(`news`);
    return response.data.slice(0, 2);
  } catch (err) {
    return [];
  }
};

export const getAllNews = async () => {
  try {
    const response = await axios.get(`news`);
    return response.data;
  } catch (err) {
    return [];
  }
};

export const addNew = async (formData, token) => {
  try {
    const res = await axios.post('news/addNews', formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
  }
};

export const updateNew = async (newId, fotmData, token) => {
  try {
    const res = await axios.put(`news/${newId}`, fotmData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
  }
};

export const deleteNew = async (newId, token) => {
  try {
    const res = await axios.delete(`news/${newId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
  }
};
