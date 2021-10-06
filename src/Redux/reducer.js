import { DEC_VALUE, INC_VALUE } from "./actionType";

const initialState = {
  counter: 0,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INC_VALUE:
      return {
        ...state,
        counter: state.counter + payload,
          };
      case DEC_VALUE: return {
          ...state,
          counter: state.counter - payload,
      }
    default:
      return state;
  }
};
