import React, { Component } from 'react';
// import express from 'express';
// import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Response from './Response';
import Footer from './Footer.js';

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
