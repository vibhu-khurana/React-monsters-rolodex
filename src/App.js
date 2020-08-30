import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Vibhu khurana',
    };
  }

  render() {
    const changeTextHandler = () => {
      this.setState({ name: 'John Smith' });
    };

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>{this.state.name}</p>
          <button onClick={changeTextHandler}>On Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
