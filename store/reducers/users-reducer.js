import { usersAPI } from "../../api/api";

const initialstate = {
  users: [],
  currentPage: 1,
  totalPages: 0,
  errorMessage: "",
  isPreloader: false,
  isLoading: true,
};

export const usersReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "USERS/SET_ERROR_MESSAGE":
    case "USERS/SET_TOTAL_PAGES":
    case "USERS/SET_CURRENT_PAGE":
    case "USERS/SET_PRELOADER":
    case "USERS/SET_LOADING":
      return { ...state, ...action.payload };
    case "USERS/SET_USERS":
      return { ...state, users: [...action.users] };
    case "USERS/ADD_MORE_USERS":
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

// actions
const setUsers = (users) => ({ type: "USERS/SET_USERS", users });
const addMoreUsers = (users) => ({ type: "USERS/ADD_MORE_USERS", users });
const setPreloader = (isPreloader) => ({
  type: "USERS/SET_PRELOADER",
  payload: { isPreloader },
});
export const setLoading = (isLoading) => ({
  type: "USERS/SET_PRELOADER",
  payload: { isLoading },
});
const setTotalPages = (totalPages) => ({
  type: "USERS/SET_TOTAL_PAGES",
  payload: { totalPages },
});
export const setCurrentPage = (currentPage) => ({
  type: "USERS/SET_CURRENT_PAGE",
  payload: { currentPage },
});

// thunks
export const getUsers =
  (pageNumber = 1, portion) =>
  (dispatch, getState) => {
    // debugger;
    // dispatch(setPreloader(true))

    const { users } = getState().users;
    const checkCurrentPage = Math.ceil(users.length / portion);
    const isInteger = users.length / portion === checkCurrentPage;

    if (users.length > portion && isInteger) {
      dispatch(setCurrentPage(users.length / portion));
      return;
    }

    if (users.length && isInteger) return;

    if (users.length && users.length < portion * checkCurrentPage) {
      const reloadPortion = checkCurrentPage * portion - users.length;
      pageNumber = Math.ceil(users.length / reloadPortion + 1);

      usersAPI
        .getUsers(pageNumber, reloadPortion)
        .then((res) => {
          dispatch(addMoreUsers(res.data.users));
          // console.log(res.data.total_pages * reloadPortion) / portion);
          dispatch(
            setTotalPages((res.data.total_pages * reloadPortion) / portion)
          );
        })
        .catch((e) => {
          const errorMessage = e.response?.data?.message || "Unknown error!";
          console.log(errorMessage);
        })
        .finally(() => {
          dispatch(setCurrentPage(checkCurrentPage));
          // dispatch(setPreloader(false));

          dispatch(setLoading(false));
        });
      return;
    }

    usersAPI
      .getUsers(pageNumber, portion)
      .then((res) => {
        if (pageNumber === 1) dispatch(setUsers(res.data.users));
        else {
          dispatch(addMoreUsers(res.data.users));
        }
        dispatch(setTotalPages(res.data.total_pages));
        // console.log(res.data.total_pages)
      })
      .catch((e) => {
        const errorMessage = e.response?.data?.message || "Unknown error!";
        console.log(errorMessage);
      })
      .finally(() => {
        dispatch(setCurrentPage(pageNumber));
        // dispatch(setPreloader(false));
        dispatch(setLoading(false));
      });
  };

export const showMoreUsers = (pageNumber, portion) => (dispatch) => {
  // const { totalPages } = getState().users;
  dispatch(setPreloader(true));
  usersAPI
    .getUsers(pageNumber, portion)
    .then((res) => {
      dispatch(addMoreUsers(res.data.users));
      dispatch(setTotalPages(res.data.total_pages));
    })
    .catch((e) => {
      const errorMessage = e.response?.data?.message || "Unknown error!";
      console.log(errorMessage);
    })
    .finally(() => {
      dispatch(setCurrentPage(pageNumber));
      dispatch(setPreloader(false));
    });
};

// export const addUser = (payload) => (dispatch, getState) => {
//   dispatch(setPreloader(true));
//   const token = getState().app.token;
//   usersAPI
//     .addUser(payload, token)
//     .then((res) => {
//       dispatch(getUsers());
//       dispatch(setOpenModal(true));
//     })
//     .catch((e) => {
//       const errorMessage = e.response?.data?.message || "Unknown error!";
//       dispatch(setErrorMessage(errorMessage));
//       setTimeout(() => dispatch(setErrorMessage("")), 3000);
//     })
//     .finally(() => {
//       dispatch(setPreloader(false));
//     });
// };
