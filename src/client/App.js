import React, { Component } from 'react';

import Message from './Message';

import logo from './logo.svg';
import './App.css';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Message />
      </div>
    );
  }
}

export default App;
