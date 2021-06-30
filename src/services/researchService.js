import http from "./HtttpService";

export const getResearchNoticesApi = async () => {
  try {
    const response = await http.get("/research-notices");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getResearchNoticeApi = async (researchNoticeId) => {
  try {
    const response = await http.get(`/research-notices/${researchNoticeId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const approveResearchNoticeApi = async (researchNoticeId) => {
  try {
    const response = await http.post(
      `/research-notices/${researchNoticeId}/approve`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteResearchNoticeApi = async (researchNoticeId) => {
  try {
    const response = await http.delete(`/research-notices/${researchNoticeId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getResearchTopicsApi = async () => {
  try {
    const response = await http.get("/research/topics");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createResearchTopicApi = async (data) => {
  try {
    const response = await http.post("/research/topics", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
