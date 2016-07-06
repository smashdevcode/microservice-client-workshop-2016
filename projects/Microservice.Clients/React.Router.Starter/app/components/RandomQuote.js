/**
 * Created by bpalmquist on 6/23/2016.
 */
import React, {Component} from 'react';
import FunnyQuote from '../common/js/forge/services/funnyQuote';
import Quote from './Quote';

export default class RandomQuote extends Component{
    state = {
        quote: undefined
    }
    componentWillMount(){
        if(!this.state.quote) {
            this.getRandomQuote();
        }
    }
    getRandomQuote = () => {
        FunnyQuote.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        FunnyQuote.getRandomQuote().then(quote => {
            this.setState({quote: quote});
        });
    };
    render(){
        return (
            <div className="container-fluid">
                <h2>Random Quote</h2>
                {Quote(this.state.quote)}
                <button className="btn btn-primary" onClick={this.getRandomQuote}>Get Random Quote</button>
            </div>
        );
    }
}
