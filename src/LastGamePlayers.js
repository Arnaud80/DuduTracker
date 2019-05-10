import React, { Component } from 'react'
//import './PlayerGamePlayers.css'

const config = require('./config');

const HandCards = ({hand1, hand2, index}) => (
    <div className='handCards {index}' index={index}>
        <img src={'/img/'+hand1+'.jpg'} width='35px'></img><img src={'/img/'+hand2+'.jpg'} width='35px'></img>
    </div>
)

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
                        {player[0]} ({players[player[0]].counthands})
                        <HandCards
                            hand1={players[player[0]].lastHand[0] + players[player[0]].lastHand[1]}
                            hand2={players[player[0]].lastHand[3] + players[player[0]].lastHand[4]}
                            index={index}
                        />
                    </div>
                    ))
                }
            </div>
        )
    }
}

export default LastGamePlayers;