import * as AppActionTypes from '../actionTypes/App';
import FunnyQuote from '../common/js/forge/services/funnyQuote';

export function loadQuotes() {
    return (dispatch) => {
        dispatch({type: AppActionTypes.LOADING_QUOTES});
        FunnyQuote.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        FunnyQuote.getAll().then(quotes => {
           dispatch({type: AppActionTypes.LOADED_QUOTES, data: quotes});
        });
    };
}

export function getRandomQuote() {
    return (dispatch) => {
        dispatch({type: AppActionTypes.LOADING_RANDOM_QUOTE});
        FunnyQuote.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        FunnyQuote.getRandomQuote()
            .then(quote => dispatch({type: AppActionTypes.LOADED_RANDOM_QUOTE, data: quote}));
    };
}
