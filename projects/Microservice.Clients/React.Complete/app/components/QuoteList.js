/**
 * Created by bpalmquist on 6/23/2016.
 */
import React, { Component } from 'react';
import FunnyQuote from '../common/js/forge/services/funnyQuote';
import Quote from './Quote';

export default class QuoteList extends Component{
    state = {
        quotes: []
    };
    componentWillMount(){
        FunnyQuote.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        FunnyQuote.getAll().then((quotes) => {
            const items = [];
            quotes.forEach((quote) => {
                const key = `quote_item_${quote.Id}`;
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
