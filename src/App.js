import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getData } from './data';

class App extends Component {
  constructor(props){
    super(props);
   
    this.state = {
      data: [],
    }
    this.handleResponse = this.handleResponse.bind(this);
  }


  componentWillMount() {
    this.test();
  }

  handleResponse(data) {
    console.log(data);
    let firstItem = data[0];
    console.log(firstItem)
    let address = firstItem.address;
    this.setState({
      data: address
    });
  }

  test() {
    const MYDATA = getData();
    MYDATA
      .then(response => {
        this.handleResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <ul>{this.state.data}</ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
