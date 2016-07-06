import React, { Component } from 'react';
import Navbar from './Navbar';

export default class App extends Component {
    render() {
        return (
            <div>
                {Navbar()}
                // TODO: Render route children components 
            </div>
        );
    }
}
