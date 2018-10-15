import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: true,
      data: null
    }
    this.loadingData();
  }

  loadingData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        loading: false,
        data: json
      });
    });
  }

  customRender = () => {
    if(this.state.loading) {
      return (
        <p>Loading ... </p>
      );
    } else {
      let data = this.state.data;
      let output = data.map(d => {
        return (
          <div key={d.id}>
            <p>{d.name} &nbsp; {d.email}</p>
          </div>
        );
      });

      return output;
    }
  }

  render() {
    return (
      <div className="App">
        {this.customRender()}
      </div>
    );
  }
}

export default App;
