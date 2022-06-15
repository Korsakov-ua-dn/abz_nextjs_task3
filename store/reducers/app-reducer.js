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
      // case "AUTH/SET_TOKEN":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

//actions
const setAuth = (isAuth) => ({ type: "APP/SET_AUTH", payload: { isAuth } });
export const setServerError = (isServerError) => ({
  type: "APP/SET_SERVER_ERROR",
  payload: { isServerError },
});

//thunk
