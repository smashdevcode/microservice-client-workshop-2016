import React, { Component } from 'react';
import QuoteService from '../common/js/forge/services/quote';
import Quote from './Quote';

export default class QuoteList extends Component{
    state = {
        quotes: []
    };

    constructor() {
        super();
        QuoteService.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
    }

    componentWillMount(){
        QuoteService.getAll().then(quotes => {            
            const items = [];

            quotes.forEach((quote) => {
                const key = `quote_item_${quote.id}`;
                items.push(<li key={key} className="list-group-item">{Quote(quote)}</li>);
            });

            this.setState({quotes: items});
        });
    }

    render(){
        return (<div className="container-fluid">
            <h2>All Quotes</h2>
            <ul className="list-group">
                {this.state.quotes}
            </ul>
        </div>);
    }
}
