import { DEC_VALUE, INC_VALUE,ADD_VALUE, SUB_VALUE,MUL_VALUE,DIV_VALUE} from "./actionType";

const initialState = {
  counter: 0,
};
export const reducer = (state = initialState, { type, payload }) => {
     console.log(state,type,payload);
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
      case ADD_VALUE: return {
          ...state,
          counter: state.counter + payload,
      }
      case SUB_VALUE: return {
          ...state,
          counter: state.counter -payload,
      }
      case MUL_VALUE: return {
          ...state,
          counter: state.counter * payload,
      }
      case DIV_VALUE: return {
          ...state,
          counter: state.counter / payload
      }
    default:
      return state;
  }
};
