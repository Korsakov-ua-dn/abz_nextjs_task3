import { signUpAPI } from "../../api/api";
import { setServerError } from "./app-reducer";

const initialstate = {
  positions: [],
  pathname: "",
  isSuccessRegistration: false,
};

export const signUpReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SIGN-UP/SET_POSITIONS":
    case "SIGN-UP/SET_PATHNAME":
    case "SIGN-UP/SET_IS-SUCCES-REGISTRATION":
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

export const setIsSuccessRegistration = (isSuccessRegistration) => ({
  type: "SIGN-UP/SET_IS-SUCCES-REGISTRATION",
  payload: { isSuccessRegistration },
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

export const createUserTC = (payload) => async (dispatch) => {
  // dispatch(setPreloader(true));
  const token = await signUpAPI.getToken().then((res) => res.data.token);
  signUpAPI
    .postUser(payload, token)
    .then((res) => {
      // dispatch(getUsers());
      dispatch(setIsSuccessRegistration(true));
    })
    .catch((e) => {
      const errorMessage = e.response?.data?.message || "Unknown error!";
      console.log(e.response.data);
      // dispatch(setErrorMessage(errorMessage));
      // setTimeout(() => dispatch(setErrorMessage("")), 3000);
    })
    .finally(() => {
      // dispatch(setPreloader(false));
    });
};
