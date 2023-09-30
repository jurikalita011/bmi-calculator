import {
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  isUpdated: false,
  registeredUser: "",
  loggedInUsers: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        registeredUser: payload,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        loggedInUsers: payload,
      };
    }
    case UPDATE_USER_PROFILE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case UPDATE_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,

        loggedInUsers: payload,
        isUpdated: true,
      };
    }
    case UPDATE_USER_PROFILE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isUpdated: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        loggedInUsers: "",
        isUpdated: false,
      };
    }

    default:
      return state;
  }
};
