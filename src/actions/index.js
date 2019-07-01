import { ADD_BELANJAAN, TOGGLE_BELANJAAN } from './actionTypes';

let nextId = 0;

export const addBelanjaan = (text) => ({
    type: ADD_BELANJAAN,
    id: nextId++,
    text
})

export const toggleBelanjaan = (id) => ({
    type: TOGGLE_BELANJAAN,
    id
})