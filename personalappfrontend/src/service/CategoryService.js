import axios from "axios";

const baseUrl = "http://localhost:8080/api/categories";

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// const createCategory = async (payload) => {
//   const token = localStorage.getItem("token");
//   try {
//     const response = await axios.post(`${baseUrl}`, payload, {
//       ...config,
//       Authorization: `Bearer ${token}`,
//     });
//     return response.data;
//   } catch (err) {
//     throw err;
//   }
// };

const getCategories = async () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${baseUrl}`, config);
  return response.data;
};

export { getCategories };
