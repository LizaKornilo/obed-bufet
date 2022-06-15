import { axios } from "./default-axios.api";

export const getComments = async (token) => {
  if (token) {
    try {
      const response = await axios.get('reviews/getAllForAdmin', {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      return response.data
    } catch (err) {
      return []
    }
  } else {
    try {
      const response = await axios.get('reviews')
      return response.data
    } catch (err) {
      return []
    }
  };
};

export const addCommentApi = async (newComment) => {
  try {
    const response = await axios.post('reviews/add', newComment)
    return response.data;
  } catch (err) {
  }
}

export const changeAdminAnswer = async (commentId, adminAnswerDto, token) => {
  try {
    const res = await axios.put(`reviews/${commentId}`, adminAnswerDto, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (err) {
  }
};