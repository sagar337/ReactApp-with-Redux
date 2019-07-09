import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Simple Person Information App with Redux to store information</li>
		  
        </ol>
        <Persons />
      </div>
    );
  }
}

export default App;
