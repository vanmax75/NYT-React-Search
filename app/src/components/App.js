import React, { Component } from 'react';
import logo from './App/assets/logo.svg';
import './App/App.css';

import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }
    }

    getMessage() {
        axios.get('/api')
            .then(response => {
                this.setState({
                    message: response.data.message,
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getMessage();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
