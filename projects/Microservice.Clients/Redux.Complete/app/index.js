import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import AppRoot from './containers/AppRoot';
import RandomQuote from './components/RandomQuote';
import QuoteList from './components/QuoteList';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ConfigureStore from './CreateStore';

export default (() => {
        const store = ConfigureStore();
    render((<Provider store = {store} >
                <Router history={browserHistory} >
                    <Route path="/" component={AppRoot}>
                        <IndexRoute component={RandomQuote} />
                        <Route path="/list" component={QuoteList} />
                    </Route>
                </Router>
            </Provider>),
        document.getElementById('root'));
    }
)();

