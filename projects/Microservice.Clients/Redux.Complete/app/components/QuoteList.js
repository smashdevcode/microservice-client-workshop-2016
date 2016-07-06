import React, { Component, PropTypes } from 'react';
import FunnyQuote from '../common/js/forge/services/funnyQuote';
import Quote from './Quote';
import Loading from './Loading';

export default class QuoteList extends Component{
    static propTypes = {
        appData: PropTypes.object,
        appActions: PropTypes.object
    };
    componentWillMount(){
        const {appActions} = this.props;

        appActions.loadQuotes();
    }
    render(){
        const {appData} = this.props;
            const items = [];
            appData.quotes.forEach(quote => {
                const key = `quote_item_${quote.Id}`;
                items.push(<li key={key} className="list-group-item">{Quote(quote)}</li>);
            });

        const content = items.length > 0 ? (<ul className="list-group">{items}</ul>) : (<div>{Loading('Loading quote list...')}</div>);
            return (<div className="container-fluid">
                <h2>All Quotes</h2>
                {content}
            </div>);
    }
}
