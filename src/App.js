import React, { Component } from 'react';
import Navbar from './Components/Navbar'; // Adjust the path based on your actual folder structure
import News from './Components/News';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News/>
      </div>
    );
  }
}
