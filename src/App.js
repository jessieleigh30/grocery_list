import React, { Component } from 'react';
import './App.css';
import List from './list';
import TobuyForm from './TobuyForm';

class App extends Component {
  state = { tobuys: [], };
  
  getUniqId = ()  => {
    return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

  addItem = (name) => {
    const { tobuys } = this.state;
    const tobuy = { name, id: this.getUniqId() , complete: false }
    this.setState({ tobuys: [tobuy, ...tobuys] }); 
    };

    handleClick = (id) => {
      const { tobuys } = this.state;
      this.setState({
        tobuys: tobuys.map( tobuy => {
          if (tobuy.id === id) {
            return {
              ...tobuy,
              complete: !tobuy.complete
            }
          }
          return tobuy
        })
      })
    }
    
    
  
  render() {
    const { tobuys } = this.state;
 
    return (
      <div>
        <TobuyForm addItem={this.addItem} />
        <List name="To Buy List" items={tobuys} tobuyClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
