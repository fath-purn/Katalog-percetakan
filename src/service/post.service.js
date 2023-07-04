import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/posts";

const getAllPublicPosts = () => {
  return axios.get('http://localhost:3000');
};

const getAllPrivatePosts = () => {
  return axios.get('http://localhost:3000', { headers: authHeader() });
};

const postService = {
    getAllPublicPosts,
    getAllPrivatePosts,
};

export default postService;