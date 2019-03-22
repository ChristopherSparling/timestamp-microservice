import React, { Component } from 'react';
import './App.css';
// import Form from './Form'
// import Response from './Response';
// import Footer from './Footer.js';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/api/timestamp/test');
    console.log(response);
    const body = await response.json();
    console.log(body)

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  callTimestampAPI = () => {
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;