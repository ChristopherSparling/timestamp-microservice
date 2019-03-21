import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Response from './Response';
import Footer from './Footer.js';
const express = require('express')


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Timestamp Microservice API
        </header>
        <main>
          <Form/>
          <Response />
          <Footer/>
        </main>
      </div>
    );
  }
}

export default App;
