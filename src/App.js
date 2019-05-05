import React, { Component } from 'react';
import './App.css';
import PlayerList from './PlayerList'
import PlayerStats from './PlayerStats'
import LastGamePlayers from './LastGamePlayers'

class App extends Component {
  state = {
    playerName: '-',
    apiupdate: 'false',
  }

  // Arrow fx for binding
  onChangePlayerList = (playerName) => {
      this.setState({playerName:playerName})
  }

  // Arrow fx for binding
  APIevent = () => {
      console.log("APIevent reçu dans App");
      this.setState({playerName:this.state.playerName, apiupdate:true})
  }

  /*// Arrow fx for binding
  onClickOnLastPlayerList = (playerName) => {
      alert(playerName)
      //this.setState({playerName:playerName})
  }*/

   // Arrow fx for binding
  handlePlayerStatsClick = () => {
      alert(this.state.playerName)
  }

  componentDidMount() {
 /*     console.log("Mise en place de l'écoute apievent");
      
      //Ecouter l'événement.
      var obj = document.getElementById("root");
      //obj.addEventListener('apievent', function () { alert("coucou") }, false);
      obj.addEventListener('apievent', this.APIevent, false);
      */
  }

  render() {
      console.log("Render App")
      return (
         <div className="App">
            <div className="LeftPanel">
                <LastGamePlayers
                    changeplayerstats={this.onChangePlayerList}
                />
            </div>
            <div className="RightPanel">
                <PlayerList
                    title='Select player'
                    changeplayerstats={this.onChangePlayerList} 
                />
                <PlayerStats
                    playerName={this.state.playerName}
                    onClick={this.handlePlayerStatsClick}
                    apiupdate={this.state.apiupdate}
                    onAPIupdate={function () {alert('coucou')}}
                />
            </div>
         </div>
      );
   }
}

export default App;
