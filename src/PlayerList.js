import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const config = require('./config');

class PlayerList extends Component {
    constructor(props) {
        super();
        this.state = {
            players :[],
            defaultPlayer : '',
            title: props.title,
            onChange : props.onChange,
        }
    }

    componentDidMount() {
        fetch(config.DuduTrackerAPI_Players.url) // Call API function to retreive list of players
        .then(results => {
            return results.json(); // Transform the data into json
        }).then(data => {
            let players = data.results.map((player) => { // Convert the json in array
                return (
                    player.PlayerName
                )
            })
            this.setState({players : players, defaultPlayer : players[0]}) // Update variables of PlayerList 
        })
        .catch(function(error) {
            console.log('There is a problem with fetch operation : ' + error.message);
        })
    }

    render() {
        console.log("Render PlayerList")
        return (
            <div>
                <Dropdown options={this.state.players} value='' placeholder={this.state.title} onChange={this.state.onChange} />
            </div>
        )
    }
}

export default PlayerList;