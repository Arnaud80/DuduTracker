import React, { Component } from 'react'

const HandCards = ({hand1, hand2, index}) => (
    <div className='handCards {index}' index={index}>
        <img src={'/img/'+hand1+'-m.jpg'} width='75px' alt={hand1} titile={hand1}></img>
        <img src={'/img/'+hand2+'-m.jpg'} width='75px' alt={hand2} title={hand2}></img>
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
                    <div className='PlayerBlock' key={index} value={players[index].PlayerName}>
                        <span className='PlayerName' onClick={() => this.onClick(players[index].PlayerName)}>{players[index].PlayerName} - ({players[index].Count})</span>
                        <span>
                            <div className='VPIP' title={players[index].VPIP}>VPIP:{(players[index].VPIP/players[index].Count*100).toFixed(1)}%</div>
                            <div className='PFR' title={players[index].PFR}>PFR:{(players[index].PFR/players[index].Count*100).toFixed(1)}%</div>
                            <div className='_3BET' title={players[index]._3BET}>3BET:{(players[index]._3BET/players[index].Count*100).toFixed(1)}%</div>
                            <div className='_3BET' title={'AF Flop:' + (players[index].AFLOP/players[index].CFLOP).toFixed(2) + ', ' +
                                                        'AF Turn:' + (players[index].ATURN/players[index].CTURN).toFixed(2) + ', ' +
                                                        'AF River:' + (players[index].ARIVER/players[index].CRIVER).toFixed(2) + ', '}>
                                AF:{((players[index].AFLOP/players[index].CFLOP+players[index].ATURN/players[index].CTURN+players[index].ARIVER/players[index].CRIVER)/3).toFixed(2)}
                            </div>
                        </span>
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