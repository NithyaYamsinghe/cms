import http from "./HtttpService";

export const createUserApi = async (data) => {
  try {
    const response = await http.post("/users/sign-up", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const userSignInApi = async (data) => {
  try {
    const response = await http.post("/users/sign-in", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
