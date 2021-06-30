import http from "./HtttpService";

export const getWorkshopNoticesApi = async () => {
  try {
    const response = await http.get("/workshop-notices");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getWorkshopNoticeApi = async (workshopNoticeId) => {
  try {
    const response = await http.get(`/workshop-notices/${workshopNoticeId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const approveWorkshopNoticeApi = async (workshopNoticeId) => {
  try {
    const response = await http.post(
      `/workshop-notices/${workshopNoticeId}/approve`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteWorkshopNoticeApi = async (workshopNoticeId) => {
  try {
    const response = await http.delete(`/workshop-notices/${workshopNoticeId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
