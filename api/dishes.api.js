import { axios } from "./default-axios.api";

export const getCategories = async () => {
  const response = await axios.get('categories')
  return response.data
}

export const getNExampleDishes = async () => {
  const categoryId = 1;
  try {
    const response = await axios.get(`dishes/${categoryId}`);
    return response.data.slice(0, 5);
  } catch (err) {
    return []
  }
}

export const getDishesListByCategoryId = async (categoryId) => {
  try {
    const response = await axios.get(`dishes/${categoryId}`);
    return response.data;
  } catch (err) {
    return [];
  }
}

export const addDish = async (formData, token) => {
  try {
    const res = await axios.post('dishes', formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (err) {
  }
};

export const updateDish = async (dishId, formData, token) => {
  try {
    const res = await axios.put(`dishes/${dishId}`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
  }
};

export const deleteDish = async (dishId, token) => {
  try {
    const res = await axios.delete(`dishes/${dishId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
  }
};