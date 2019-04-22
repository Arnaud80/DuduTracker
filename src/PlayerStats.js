import React, { Component } from 'react'

const config = require('./config');

class PlayerStats extends Component {
    constructor(props) {
        super();
        this.state = {
            onClick: props.onClick,
            range: this.initRange(),
        }
    }

    initRange() {
        let range={
            'AA':0, 'AKs':0, 'AQs':0, 'AJs':0, 'ATs':0, 'A9s':0, 'A8s':0, 'A7s':0, 'A6s':0, 'A5s':0, 'A4s':0, 'A3s':0, 'A2s':0,
            'AKo':0, 'KK':0, 'KQs':0, 'KJs':0, 'KTs':0, 'K9s':0, 'K8s':0, 'K7s':0, 'K6s':0, 'K5s':0, 'K4s':0, 'K3s':0, 'K2s':0,
            'AQo':0, 'KQo':0, 'QQ':0, 'QJs':0, 'QTs':0, 'Q9s':0, 'Q8s':0, 'Q7s':0, 'Q6s':0, 'Q5s':0, 'Q4s':0, 'Q3s':0, 'Q2s':0,
            'AJo':0, 'KJo':0, 'QJo':0, 'JJ':0, 'JTs':0, 'J9s':0, 'J8s':0, 'J7s':0, 'J6s':0, 'J5s':0, 'J4s':0, 'J3s':0, 'J2s':0,
            'ATo':0, 'KTo':0, 'QTo':0, 'JTo':0, 'TT':0, 'T9s':0, 'T8s':0, 'T7s':0, 'T6s':0, 'T5s':0, 'T4s':0, 'T3s':0, 'T2s':0,
            'A9o':0, 'K9o':0, 'Q9o':0, 'J9o':0, 'T9o':0, '99':0, '98s':0, '97s':0, '96s':0, '95s':0, '94s':0, '93s':0, '92s':0,
            'A8o':0, 'K8o':0, 'Q8o':0, 'J8o':0, 'T8o':0, '98o':0, '88':0, '87s':0, '86s':0, '85s':0, '84s':0, '83s':0, '82s':0,
            'A7o':0, 'K7o':0, 'Q7o':0, 'J7o':0, 'T7o':0, '97o':0, '87o':0, '77':0, '76s':0, '75s':0, '74s':0, '73s':0, '72s':0,
            'A6o':0, 'K6o':0, 'Q6o':0, 'J6o':0, 'T6o':0, '96o':0, '86o':0, '76o':0, '66':0, '65s':0, '64s':0, '63s':0, '62s':0,
            'A5o':0, 'K5o':0, 'Q5o':0, 'J5o':0, 'T5o':0, '95o':0, '85o':0, '75o':0, '65o':0, '55':0, '54s':0, '53s':0, '52s':0,
            'A4o':0, 'K4o':0, 'Q4o':0, 'J4o':0, 'T4o':0, '94o':0, '84o':0, '74o':0, '64o':0, '54o':0, '44':0, '43s':0, '42s':0,
            'A3o':0, 'K3o':0, 'Q3o':0, 'J3o':0, 'T3o':0, '93o':0, '83o':0, '73o':0, '63o':0, '53o':0, '43o':0, '33':0, '32s':0,
            'A2o':0, 'K2o':0, 'Q2o':0, 'J2o':0, 'T2o':0, '92o':0, '82o':0, '72o':0, '62o':0, '52o':0, '42o':0, '32o':0, '22':0}

        return(range)
    }

    fetchPlayerHands() {
        fetch(config.DuduTrackerAPI_PlayerHands.url + '/' + this.props.playerName) // Call API function to retreive list of players
        .then(results => {
            return results.json(); // Transform the data into json
        }).then(data => {
            //this.setState({hands : hands}) // Update variables of PlayerList
            let hands = data.results.map((hand) => { // Convert the json in array
                return (
                    hand.Hand
                )
            })
            this.setState({hands : hands}) // Update variables of PlayerList 
        })
        .catch(function(error) {
            console.log('There is a problem with fetch operation : ' + error.message);
        })
    }

    componentDidUpdate(prevProps) {
        console.log("Players Stats componentDidUpdate")
        if(this.props.playerName!==prevProps.playerName) {
            this.fetchPlayerHands();
        }
    }

    onClick() {
        alert(this.props.playerName)
    }
    
    render() {
        const { hands } = this.state
        console.log("Render PlayerStats")

        return (
            // Check if hands is populed and display result if yes 
            <div className='playerStats' onClick={() => this.onClick()}>
                <h1>STATS : {this.props.playerName}</h1>
                <h2>Know hands : 
                    {hands ? hands.length : '-'}
                </h2>
                {hands ? 
                    hands.map((hand, index) => (
                        <div className='hands' key={index}>{hand}</div>
                    ))
                    : '-'}
            </div>
        )
    }
}

export default PlayerStats;