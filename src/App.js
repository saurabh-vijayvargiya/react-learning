import React, { Component } from 'react';
import './App.css';
import Text from './Components/Text';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="row">
          <Text symbol="TRXETH" orderId="2387611" price="0.0001204" quantity="785" />
        </div>
      </div>
    );
  }
}

export default App;
