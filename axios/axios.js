import axios from "axios";

const instance = axios.create({
  baseURL: `https://frontend-test-assignment-api.abz.agency/api/v1`,
});

export const authAPI = {
  getToken() {
    return instance.get("/token");
  },
};
