import axios from "axios";

export const api = axios.create({
  baseURL: "https://social-media-feed-posts.herokuapp.com/",
});
