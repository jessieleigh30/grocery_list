import React, { Component } from 'react';
import './App.css';
import List from './list';
import TobuyForm from './TobuyForm';

class App extends Component {
  state = {
    tobuy: [
      {id: 1, name:"milk", complete: "false"},
      {id: 2, name:"cheese", complete: "false"},
      {id: 1, name:"bananas", complete: "false"},
    ]
  };

 
    
  
  render() {
    const { tobuy } = this.state;
 
    return (
      <div>
        <TobuyForm />
        <List name="To Buy List" items={tobuy} />
      </div>
    );
  }
}

export default App;
