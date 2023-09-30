import {
  BMI_FAILURE,
  BMI_REQUEST,
  GET_BMI_SUCCESS,
  POST_BMI_SUCCESS,
} from "../actionTypes";
const initialState = {
  isLoading: false,
  isError: false,
  bmi: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BMI_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case BMI_FAILURE: {
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    }
    case GET_BMI_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        bmi: payload,
        isError: true,
      };
    }
    case POST_BMI_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    }
    default:
      return state;
  }
};
