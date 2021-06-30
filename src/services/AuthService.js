import http from "./HtttpService";
import jwtDecode from "jwt-decode";

const userSignIn = async (data, mode) => {
  if (mode === "admin") {
    try {
      const response = await http.post("/admin/sign-in", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("token", response.data.token);
      return response;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const response = await http.post("/users/sign-in", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("token", response.data.token);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

const userSignUp = async (data) => {
  try {
    const response = await http.post("/users/sign-up", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const userUpdate = async (data) => {
  try {
    const response = await http.patch("/users/update", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const userProfile = async (userId) => {
  try {
    const response = await http.get(`/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const userDelete = async (userId) => {
  try {
    const response = await http.delete(`/users/delete/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getCurrentUser = () => {
  try {
    const token = localStorage.getItem("token");
    const user = jwtDecode(token);
    return user;
  } catch (ex) {
    return null;
  }
};

const userLogout = () => {
  localStorage.removeItem("token");
  window.location = "/";
};

// To Get Jwt
const getJwt = () => {
  return localStorage.getItem("token");
};

//Fixing Bi Directional Dependancies
http.setJwt(getJwt());

export default {
  userSignIn,
  userSignUp,
  userLogout,
  userUpdate,
  userDelete,
  userProfile,
  getCurrentUser,
};
