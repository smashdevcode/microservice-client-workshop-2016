import React from 'react';
import {render} from 'react-dom';
import AppRoot from './containers/AppRoot';
import RandomQuote from './components/RandomQuote';
import QuoteList from './components/QuoteList';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// TODO: import {Provider} from react-redux module
// TODO: import ConfigureStore module

export default (() => {
    // TODO: create a store to register with Redux
        // TODO: Wrap router with a react-redux provider that uses the store we created
        render((<Router history={browserHistory} >
                    <Route path="/" component={AppRoot}>
                        <IndexRoute component={RandomQuote} />
                        <Route path="/list" component={QuoteList} />
                    </Route>
                </Router>),
        document.getElementById('root'));
    }
)();

