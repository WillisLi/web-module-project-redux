import { ADD_FAV, REMOVE_FAV, TOGGLE_FAV } from "../actions/favoriteActions";

const initialState = {
    favorites: [],
    displayFavorites: true,
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAV:
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAV:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default favoritesReducer;