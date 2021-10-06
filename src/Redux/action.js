import { INC_VALUE, DEC_VALUE } from "./actionType.js";


export const incValue = (data) => {
    return { type: INC_VALUE, payload: data };
}
    
export const decValue = (data) => {
    return {type: DEC_VALUE, payload: data}
}