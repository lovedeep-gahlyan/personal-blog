import axios from "axios";

const baseUrl = "http://localhost:8080/api/auth";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const registerUser = async (payload) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, payload, config);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const authenticateUser = async (payload) => {
  try {
    const response = await axios.post(
      `${baseUrl}/authenticate`,
      payload,
      config
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export { authenticateUser, registerUser };
