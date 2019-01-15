import React, { Component } from 'react';
import './App.css';
import Map from './map';

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1>Node App for Geospatial Queries in Postgres && PostGIS</h1>
      <Map />
      </div>
    );
  }
}

export default App;
