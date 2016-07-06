import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import RandomQuote from './components/RandomQuote';
import QuoteList from './components/QuoteList';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (() => {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={RandomQuote}/>
                <Route path="/list" component={QuoteList}/>
            </Route>
        </Router>
    ), document.getElementById('root'));
})();

