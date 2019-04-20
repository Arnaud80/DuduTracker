import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const config = require('./config');

class PlayerList extends Component {
    constructor() {
        super();
        this.state = {
            players :[],
            defaultPlayer : '',
        }
    }

    componentDidMount() {
        fetch(config.DuduTrackerAPI_Players.url)
        .then(results => {
            return results.json(); // Transform the data into json
        }).then(data => {
            let players = data.results.map((player) => {
                return (
                    player.PlayerName
                )
            })
            //console.log('data' + data.results)
            this.setState({players : players, defaultPlayer : players[0]})
        })
        .catch(function(error) {
            console.log('There is a problem with fetch operation : ' + error.message);
        })
    }

    render() {
        return (
            <div>
                <Dropdown options={this.state.players} value={this.state.defaultPlayer} placeholder='Players list' />
            </div>
        )
    }
}

export default PlayerList;