import * as AppActionTypes from '../actionTypes/App';
import FunnyQuote from '../common/js/forge/services/funnyQuote';

export function loadQuotes() {
    return (dispatch) => {
        // TODO: Dispatch LOADING_QUOTES

        FunnyQuote.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        FunnyQuote.getAll().then(quotes => {
            // TODO: Dispatch LOADED_QUOTES
        });
    };
}

export function getRandomQuote() {
    return (dispatch) => {
        // TODO: Dispatch LOADING_RANDOM_QUOTE
        
        FunnyQuote.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        FunnyQuote.getRandomQuote()
            .then(quote => /* TODO: Dispatch LOADED_RANDOM_QUOTE */);
    };
}
