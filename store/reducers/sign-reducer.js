import { signUpAPI } from "../../api/api";
import { setServerError } from "./app-reducer";

const initialstate = {
  positions: [],
  pathname: "",
};

export const signUpReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SIGN-UP/SET_POSITIONS":
    case "SIGN-UP/SET_PATHNAME":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

// actions
const setPositions = (positions) => ({
  type: "SIGN-UP/SET_POSITIONS",
  payload: { positions },
});

export const setPathname = (pathname) => ({
  type: "SIGN-UP/SET_PATHNAME",
  payload: { pathname },
});

// thunks
export const getPositions = () => (dispatch) => {
  // debugger
  // dispatch(setPreloader(true));
  signUpAPI
    .getPositions()
    .then((res) => {
      dispatch(setPositions(res.data.positions));
    })
    .catch((e) => {
      // debugger
      const errorMessage = e.response?.data?.message || "Unknown error!";
      console.log(errorMessage);
      dispatch(setServerError(true));
    })
    .finally(() => {
      // dispatch(setPreloader(false));
    });
};
