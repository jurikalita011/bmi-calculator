import { BMI_FAILURE, BMI_REQUEST, BMI_SUCCESS } from "../actionTypes";
const initialState = {
  isLoading: false,
  isError: false,
  bmi: 0,
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
    case BMI_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        bmi: payload,
        isError: true,
      };
    }
    case BMI_FAILURE: {
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
