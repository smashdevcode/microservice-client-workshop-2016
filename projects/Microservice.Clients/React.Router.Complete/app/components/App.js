import React, { Component } from 'react';
import Navbar from './Navbar';

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
