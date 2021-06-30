import http from "./HtttpService";

const getWorkshop = async (userId) => {
  try {
    const response = await http.get(`/workshops/users/${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getWorkshopById = async (workshopId) => {
  try {
    const response = await http.get(`/workshops/${workshopId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteWorkshop = async (workshopId) => {
  try {
    const response = await http.delete(`/workshops/delete/${workshopId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getWorkshop,
  getWorkshopById,
  deleteWorkshop,
};
