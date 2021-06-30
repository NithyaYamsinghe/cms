import http from "./HtttpService";

export const getStatsApi = async () => {
  try {
    const response = await http.get("/admins/stats");
    return response;
  } catch (error) {
    console.log(error);
  }
};
