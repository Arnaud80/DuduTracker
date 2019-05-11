import React, { Component } from 'react'

const HandCards = ({hand1, hand2, index}) => (
    <div className='handCards {index}' index={index}>
        <img src={'/img/'+hand1+'.jpg'} width='40px' alt={hand1}></img><img src={'/img/'+hand2+'.jpg'} width='40px' alt={hand2}></img>
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

    getHand(hand, num) {
        if(hand) {
            if(num===1) {
                return(hand[0] + hand[1]);
            } else {
                return(hand[3] + hand[4]);
            }
        } else return 'bb';
    }

    render() {
        const { players } = this.props;
        console.log("Render LastTablePlayers");
        
        return (
            <div className='LastTablePlayers'>
                {   
                    Object.entries(players).map((player, index) => (
                    <div className='Player' key={index} value={players[index].PlayerName}>
                        <span onClick={() => this.onClick(players[index].PlayerName)}>{players[index].PlayerName} - ({players[index].Count})</span>
                        <HandCards
                            hand1={this.getHand(players[index].Hand, 1)}
                            hand2={this.getHand(players[index].Hand, 2)}
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