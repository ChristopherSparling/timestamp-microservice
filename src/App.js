import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Response from './Response';
import Footer from './Footer.js';

class App extends Component {
state = {
    data: null, // testing purposes currently
    response: null
  };

  formCallback = (formData) => {
    this.setState({response: formData});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <Form callback={this.formCallback}/>
        <Response />
        <Footer/>
      </div>
    );
  }
}

export default App;