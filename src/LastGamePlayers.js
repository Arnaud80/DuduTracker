import React, { Component } from 'react'
//import './PlayerGamePlayers.css'

const config = require('./config');

class LastGamePlayers extends Component {
    constructor(props) {
        super();
        this.state = {
            players: [],
            handsQuantity: '',
        }
    }

    fetchPlayerStats = (playerName) => {
        fetch(config.DuduTrackerAPI_Players.url + '/' + playerName) // Call API function to retreive last game
        .then(res => {
            return res.json(); // Transform the data into json
        }).then(data => {
            //console.log("playerName :" + playerName)
            let players=this.state.players
            players[playerName]=data.results[0].count

            //console.log(players)
            this.setState({players : players})
        })
        .catch(error => {
            console.log('Error with API: ' + config.DuduTrackerAPI_LastGame.url);
            console.log('There is a problem with fetch operation : ' + error.message);
        })
    }

    fetchLastGame() {
        fetch(config.DuduTrackerAPI_LastGame.url) // Call API function to retreive last game
        .then(res => {
            return res.json(); // Transform the data into json
        }).then(data => {
            let players=[];
            //console.log(players);

            Object.values(data.results[0].Players).forEach((playerName) => ( 
                players[playerName]=this.fetchPlayerStats(playerName)
            ));

            //console.log("Players : ");
            //console.log(players);
            
            //this.setState({players : players}); // Update variables of LastGamePlayers
        })
        .catch(error => {
            console.log('Error with API: ' + config.DuduTrackerAPI_LastGame.url);
            console.log('There is a problem with fetch operation : ' + error.message);
        })
    }

    onClick = (value) => {
        this.props.changeplayerstats(value);
     };

    componentDidMount(prevProps) {
        console.log("LastGamePlayer componentDidMount")
        this.fetchLastGame();
    }

    render() {
        const { players } = this.state
        console.log("Render LastTablePlayers")
        
        return (
            <div className='LastTablePlayers'>
                {   
                    Object.entries(players).map((player, index) => (
                    <div className='Player' key={index} onClick={() => this.onClick(player[0])} value={player[0]}>{player[0]} ({[players[player[0]]]})</div>
                    ))
                }
            </div>
        )
    }
}

export default LastGamePlayers;