import axios from "axios";
import { setServerError } from "../store/reducers/app-reducer";
// import { store } from "../store/store";

const instance = axios.create({
  baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1",
});

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//       // debugger
//     console.dir(error);
//     if (error.response?.status >= 500) {
//       store.dispatch(setServerError(true));
//     } else {
//       //handleError(error.message);
//     }
//     return Promise.reject(error);
//   }
// );

export const usersAPI = {
  getUsers(currentPage, usersCount) {
    return instance.get(`/users?page=${currentPage}&count=${usersCount}`);
  },
};

export const signUpAPI = {
  getPositions() {
    return instance.get("/positions");
  },
};

// export const setInterceptors = (store) => {
//   instance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       console.dir(error);
//       if (error.response?.status >= 500) {
//         store.dispatch(setServerError(true));
//       } else {
//         //handleError(error.message);
//       }
//       return Promise.reject(error);
//     }
//   );
// };
