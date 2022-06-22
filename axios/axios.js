import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export const authAPI = {
  getToken() {
    return instance.get("/token");
  },
};
