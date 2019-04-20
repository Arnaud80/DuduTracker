import React, { Component } from 'react';
import './App.css';
import PlayerList from './PlayerList'



class App extends Component {
  // Arrow fx for binding
  handlePlayerListClick = () => {
      alert('coucou');
  }

  render() {
    return (
      <div className="App">
        <PlayerList
            title='Select player'
            list={this.state}
            status='visible'
            onClick={this.handlePlayerListClick} 
        />
      </div>
    );
  }
}

export default App;
