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

export default {
  keynoteUpload,
  getKeynotes,
  // researchUpdate,
  // workshopUpload,
  // workshopUpdate,
};
