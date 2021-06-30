import http from "./HtttpService";

const keynoteUpload = (
  file,
  name,
  workplace,
  description,
  user,
  onUploadProgress
) => {
  let formData = new FormData();

  formData.append("imageFile", file);
  formData.append("name", name);
  formData.append("workPlace", workplace);
  formData.append("description", description);
  formData.append("user", user);

  return http.post("/keynotes", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export const getKeynotes = async () => {
  try {
    const response = await http.get("/keynotes");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllWorkshops = async () => {
  try {
    const response = await http.get("/workshops");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllReasearchNotices = async () => {
  try {
    const response = await http.get("/research-notices");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllResearches = async () => {
  try {
    const response = await http.get("/research");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createWorkshopNotice = async (workshopId) => {
  try {
    const response = await http.post(`/workshop-notices/${workshopId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createResearchNotice = async (researchId) => {
  try {
    const response = await http.post(`/research-notices/${researchId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default {
  keynoteUpload,
  getKeynotes,
  getAllWorkshops,
  createWorkshopNotice,
  getAllResearches,
  createResearchNotice,
  // researchUpdate,
  // workshopUpload,
  // workshopUpdate,
};
