export const TOGGLE_FAV = "TOGGLE_FAV";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const toggleFavorites = () => {
    return({type:TOGGLE_FAV})
}

export const addFavorites = (obj) => {
    return({type:ADD_FAV, payload: obj})
}

export const removeFavorites = (id) => {
    return({type:REMOVE_FAV, payload: id})
}