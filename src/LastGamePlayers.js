import React, { Component } from 'react'
//import './PlayerGamePlayers.css'

const config = require('./config');

class LastGamePlayers extends Component {
    constructor(props) {
        super();
        this.state = {
            players: '',
        }
    }

    fetchLastGame() {
        fetch(config.DuduTrackerAPI_LastGame.url) // Call API function to retreive last game
        .then(results => {
            return results.json(); // Transform the data into json
        }).then(data => {
            console.log(">>>>" + data.results[0].Players);
            this.setState({players : data.results[0].Players}); // Update variables of LastGamePlayers
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
                {   Object.entries(players).map((playerName, index) => (
                    <div className='Player' key={index} onClick={() => this.onClick(playerName[1])} value={playerName[1]}>{playerName[1]}</div>
                ))
                }
            </div>
        )
    }
}

export default LastGamePlayers;