import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="odometer"><div class="digit">
      <div class="digit-container digit-hundred">0 9 8 7 6 5 4 3 2 1 0</div>
    </div><div class="digit">
      <div class="digit-container digit-ten">0 9 8 7 6 5 4 3 2 1 0</div>
    </div><div class="digit">
      <div class="digit-container digit-one">0 9 8 7 6 5 4 3 2 1 0</div>
    </div></div>
    );
  }
}

export default App;
