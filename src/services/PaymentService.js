import http from "./HtttpService";

const createPayment = async (data) => {
  try {
    const response = await http.post("/payment", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getPayment = async (userId) => {
  try {
    const response = await http.get(`/payment/users/${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getPaymentById = async (paymentId) => {
  try {
    const response = await http.get(`/payment/${paymentId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default {
  createPayment,
  getPayment,
  getPaymentById,
};
