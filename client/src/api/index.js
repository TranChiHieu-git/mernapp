import axios from "axios";

const URL = "http://localhost:8000/";
export const fetchPost = () => axios.get(`${URL}posts`);
export const createPost = (payload) => axios.post(`${URL}posts`,payload);
export const updatePost = (payload) => axios.put(`${URL}posts`,payload);