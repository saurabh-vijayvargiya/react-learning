import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      num: "",
      message: ""
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

  checkPrime(e) {
    let number = e.target.value;
    let msg = "";

    if (number == 2) {
      msg = "Prime";
    }
    else {
      let prime = true;
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          prime = false;
          break;
        }
      }

      msg = prime ? "Prime" : "Not Prime";
    }

    this.setState({
      num: number,
      message: msg
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Prime Number checker</h1>
          <input type="number" value={this.state.num} onChange={this.checkPrime.bind(this)} />
          <p>{this.state.message}</p>
        </div>
        <div>
          <h1>Counter</h1>
          <p>{this.state.counter}</p>
          <button onClick={this.increaseCounter.bind(this)}>Increase</button>
          <button onClick={this.decreaseCounter.bind(this)}>Decrease</button>
        </div>
      </div>
    );
  }
}

export default App;
