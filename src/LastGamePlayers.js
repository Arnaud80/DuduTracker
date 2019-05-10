import React, { Component } from 'react'
//import './PlayerGamePlayers.css'

const config = require('./config');

class LastGamePlayers extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
        }
    }

    onClick = (value) => {
        this.props.changeplayerstats(value);
     };

    /*componentDidMount() {
        console.log("LastGamePlayer componentDidMount")
        this.fetchLastGame();
    }*/

    render() {
        const { players } = this.props;
        console.log("Render LastTablePlayers");
        
        return (
            <div className='LastTablePlayers'>
                {   
                    Object.entries(players).map((player, index) => (
                    <div className='Player' key={index} onClick={() => this.onClick(player[0])} value={player[0]}>
                        {player[0]} ({[players[player[0]]]})
                    </div>
                    ))
                }
                <img src='/img/1h.jpg' width='35px'></img>
            </div>
        )
    }
}

export default LastGamePlayers;