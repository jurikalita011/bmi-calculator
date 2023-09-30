import axios from "axios";
import {
  BMI_FAILURE,
  BMI_REQUEST,
  GET_BMI_SUCCESS,
  POST_BMI_SUCCESS,
} from "../actionTypes";

export const postBmi = (data) => (dispatch) => {
  dispatch({ type: BMI_REQUEST });
  axios
    .post("https://bmi-calc-api.onrender.com/data", data)
    .then((res) => {
      dispatch({ type: POST_BMI_SUCCESS });
      console.log(res, "bmi");
    })
    .catch((error) => {
      dispatch({ type: BMI_FAILURE });
      console.log(error);
    });
};

export const getBmi = () => (dispatch) => {
  axios
    .get("https://bmi-calc-api.onrender.com/data")
    .then((res) => {
      dispatch({ type: GET_BMI_SUCCESS, payload: res.data });
      console.log(res, "bmi");
    })
    .catch((error) => {
      dispatch({ type: BMI_FAILURE });
      console.log(error);
    });
};
