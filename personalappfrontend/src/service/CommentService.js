import axios from "axios";

const baseUrl = "http://localhost:8080/api/comments";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const createComment = async (payload) => {
  const comment = await axios.post(`${baseUrl}`, payload, config);
  return comment.data;
};

export { createComment };
