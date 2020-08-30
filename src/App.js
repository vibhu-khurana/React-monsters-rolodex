import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Dracula',
          id: 101,
        },
        {
          name: 'Zombie',
          id: 102,
        },
      ],
    };
  }

  render() {
    const changeTextHandler = () => {
      this.setState({ name: 'John Smith' });
    };

    return (
      <div className='App'>
        {this.state.monsters.map((mosnter) => (
          <h1 key={mosnter.id}>{mosnter.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
