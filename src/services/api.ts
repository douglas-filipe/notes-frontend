import axios from "axios";

const api = axios.create({
  baseURL: "https://notes-api-node.herokuapp.com/"
});

export default api;