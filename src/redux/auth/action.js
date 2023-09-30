import axios from "axios";
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

export const signup = (user) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  axios
    .post("https://bmi-calc-api.onrender.com/users", user)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      console.log(res, "user");
    })
    .catch((error) => {
      dispatch({ type: SIGNUP_FAILURE });
      console.log(error);
    });
};
//get
export const getUsers = () => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  axios
    .get("https://bmi-calc-api.onrender.com/users")
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      console.log(res, "usersssss");
    })
    .catch((error) => {
      dispatch({ type: SIGNUP_FAILURE });
      console.log(error);
    });
};

//login
export const signin = (data) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  axios
    .get(
      `https://bmi-calc-api.onrender.com/users?email=${data.email}&password=${data.password}`,
      data
    )
    .then((res) => {
      console.log("login", res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: SIGNUP_FAILURE });
      console.log(err);
    });
};
//update profile

export const updateUserProfile = (id, data) => (dispatch) => {
  dispatch({ type: UPDATE_USER_PROFILE_REQUEST });
  axios
    .patch(`https://bmi-calc-api.onrender.com/users/${id}`, data)
    .then((res) => {
      dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: UPDATE_USER_PROFILE_FAILURE });
      console.log(error);
    });
};
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
