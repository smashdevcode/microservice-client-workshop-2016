import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import appReducer from './reducers/App';

export default function() {
    const logger = createLogger();
    return createStore(appReducer, applyMiddleware(thunk, logger));
}