import * as AppActionTypes from '../actionTypes/App';
import {combineReducers} from 'redux';

const initialize = () => ({
    quotes: [],
    randomQuote: null,
    loading: false
});

const App = (state = initialize(), action) => {
    switch(action.type) {
        case AppActionTypes.LOADING_QUOTES:
            return {
                ...state,
                loading: true
            };
        case AppActionTypes.LOADED_QUOTES:
            return {
                ...state,
                quotes: action.data,
                loading: false
            };
        case AppActionTypes.LOADING_RANDOM_QUOTE:
            return {
                ...state,
                loading: true
            };
        case AppActionTypes.LOADED_RANDOM_QUOTE:
            return {
                ...state,
                randomQuote: action.data,
                loading: false
            };
        default:
            return state;
    }
}

const reducer = combineReducers({
    appData: App
});

export default reducer;
