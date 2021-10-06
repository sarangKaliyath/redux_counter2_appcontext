import { INC_VALUE, DEC_VALUE,ADD_VALUE, SUB_VALUE,MUL_VALUE,DIV_VALUE } from "./actionType.js";


export const incValue = (data) => {
    return { type: INC_VALUE, payload: data };
}
    
export const decValue = (data) => {
    return {type: DEC_VALUE, payload: data}
}

export const addValue = (data) => {
    return {type: ADD_VALUE, payload: data}
}
export const subValue = (data) => {
    return {type: SUB_VALUE, payload: data}
}
export const mulValue = (data) => {
    return {type: MUL_VALUE, payload: data}
}
export const divValue = (data) => {
    return {type: DIV_VALUE, payload: data}
}