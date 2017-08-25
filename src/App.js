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
  }


  componentWillMount() {
    this.test();
  }

  handleResponse(data) {
    let firstItem = data.slice(0, 10);
    console.log(firstItem);
    firstItem.map(crime => {
      return <li>{crime.address}</li>;
    });
  }

  test() {
    const MYDATA = getData();
    MYDATA
      .then(function (response) {
       this.handleResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(MYDATA);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <ul>{}</ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
