import { signUpAPI } from "../../api/api";

const initialState = {
  isAuth: false,
  isServerError: false,
  // numberColumns: 0,
  // isOpenModal: false,
  // isOpenMenu: false,
  // preloader: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APP/SET_AUTH":
    case "APP/SET_SERVER_ERROR":
      // case "AUTH/SET_OPEN_MENU":
      // case "AUTH/SET_OPEN_MODAL":
      // case "AUTH/SET_NUMBER_COLUMNS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

//actions
// const setAuth = (isAuth) => ({ type: "APP/SET_AUTH", payload: { isAuth } });
export const setServerError = (isServerError) => ({
  type: "APP/SET_SERVER_ERROR",
  payload: { isServerError },
});

//thunk
export const initializeApp = () => (dispatch) => {
  // dispatch(setPreloader(true));
  signUpAPI
    .getToken()
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    })
    .catch((e) => {
      const errorMessage = e.response?.data?.message || "Unknown error!";
      console.log(errorMessage);
    })
    .finally(() => {
      // dispatch(setPreloader(false));
    });
};
