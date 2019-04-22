import React, { Component } from 'react';
import './App.css';
import PlayerList from './PlayerList'
import PlayerStats from './PlayerStats'

class App extends Component {
  state = {
    playerName: '',
  }

  // Arrow fx for binding
  onChangePlayerList = (item) => {
      // I don't understand why item.value have a space as prefix 
      let playerName=item.value
      this.setState({playerName:playerName.trim()})
  }

   // Arrow fx for binding
  handlePlayerStatsClick = () => {
      alert(this.state.playerName)
  }

  render() {
    console.log("Render App")
    return (
      <div className="App">
        <PlayerList
            title='Select player'
            onChange={this.onChangePlayerList} 
        />
        <PlayerStats
            playerName={this.state.playerName}
            onClick={this.handlePlayerStatsClick}
        />
      </div>
    );
  }
}

export default App;
