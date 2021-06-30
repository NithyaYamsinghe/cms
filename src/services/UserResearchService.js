import http from "./HtttpService";

const getResearch = async (userId) => {
  try {
    const response = await http.get(`/research/users/${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getResearchById = async (researchId) => {
  try {
    const response = await http.get(`/research/${researchId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteResearch = async (researchId) => {
  try {
    const response = await http.delete(`/research/delete/${researchId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getResearch,
  getResearchById,
  deleteResearch,
};
