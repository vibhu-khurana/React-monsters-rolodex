import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
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
