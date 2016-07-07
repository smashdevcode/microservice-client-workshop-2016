import * as AppActionTypes from '../actionTypes/App';
import {combineReducers} from 'redux';

const initialize = () => ({
    // TODO: initial state properties
});

const App = (state = initialize(), action) => {
    switch(action.type) {
        // TODO: Add case for Loading Quotes
        // TODO: Add case for Loaded Quotes
        // TODO: Add case for Loading a Random Quote
        // TODO: Add case for Loaded a Random Quote

        default:
            return state;
    }
}

const reducer = combineReducers({
    appData: App
});

export default reducer;
