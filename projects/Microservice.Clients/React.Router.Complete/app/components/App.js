/**
 * Created by bpalmquist on 6/23/2016.
 */
import React, { Component } from 'react';
import Navbar from './Navbar';
import RandomQuote from './RandomQuote';
import QuoteList from './QuoteList';

export default class App extends Component {
    render() {
        return (
            <div>
                {Navbar()}
                {this.props.children}
            </div>
        );
    }
}
