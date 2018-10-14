import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decreaseCounter() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.counter}</p>
          <button onClick={this.increaseCounter.bind(this)}>Increase</button>
          <button onClick={this.decreaseCounter.bind(this)}>Decrease</button>
        </header>
      </div>
    );
  }
}

export default App;
