import axios from "axios";

const baseUrl = "http://localhost:8080/api/posts";

const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  Authorization: `Bearer ${token}`,
};

const postBlog = async (payload) => {
  try {
    const response = await axios.post(`${baseUrl}`, payload, config);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

const getAllBlogs = async (payload) => {
  const response = await axios.get(`${baseUrl}`, config);
  return response.data;
};

export { postBlog, getAllBlogs };
