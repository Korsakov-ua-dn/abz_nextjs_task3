import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
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

  getToken() {
    return instance.get("/token");
  },

  postUser(payload, token) {
    const formData = new FormData();
    formData.append("name", payload.name);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("position_id", payload.position);
    formData.append("photo", payload.photo);

    return instance.post(`/users`, formData, {
      headers: {
        Token: token,
        "Content-Type": "multipart/form-data",
      },
    });
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
