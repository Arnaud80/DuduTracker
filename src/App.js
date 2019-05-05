import React, { Component } from 'react';
import './App.css';
import PlayerList from './PlayerList'
import PlayerStats from './PlayerStats'
import LastGamePlayers from './LastGamePlayers'
import config from './config';
import socketIOClient from "socket.io-client";

class App extends Component {
  state = {
    playerName: '-',
    range: config.Constants.range,
    rangeCards: config.Constants.rangeCards,
    hands : [],
  }

  // Return a hand on range format, eg. getRangeHand(Kc,9h) return K9o or getRangeHand(9h,Kh) return K9s
    getRangeHand(card1, card2) {
        let tagCard = '' //'s' for suited of 'o' for not suited
        let switchCard ='' // Temp variable use to order card by value

        if(config.Constants.valueCard[card1[0]] < config.Constants.valueCard[card2[0]]) {
            switchCard = card1;
            card1 = card2;
            card2 = switchCard;
        }

        if(card1[0]===card2[0]) {
            return(card1[0]+card2[0])
        } else {
            if(card1[1]===card2[1]) tagCard='s'
            else tagCard='o'
            return(card1[0]+card2[0]+tagCard)
        }
    }

  fetchPlayerHands(playerName) {
        //let range = config.Constants.defaultRange; // Why the constant is modifed ?
        let range = { // I don't use the config constat because the constant is modified
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
        'A2o':0, 'K2o':0, 'Q2o':0, 'J2o':0, 'T2o':0, '92o':0, '82o':0, '72o':0, '62o':0, '52o':0, '42o':0, '32o':0, '22':0
        };

        fetch(config.DuduTrackerAPI_PlayerHands.url + '/' + playerName) // Call API function to retreive list of players
        .then(results => {
            return results.json(); // Transform the data into json
        }).then(data => {
            let hands = data.results.map((hand) => { // Convert the json in array
                let card1 = hand.Hand[0]+hand.Hand[1] // Get 2 fisrt caracters of the hand (eg. Kc,9h ==> card1=Kc)
                let card2 = hand.Hand[3]+hand.Hand[4] // Get 2 last caracters of the hand (eg. Kc,9h ==> card2=9h)
                let rangeHand=this.getRangeHand(card1, card2)

                range[rangeHand]=range[rangeHand]+1 // Increment the hand of the range
                return hands
            })
            return([hands, range]);
        }).then( res => {
                this.setState({hands : res[0], range : res[1], playerName : playerName}) // Update variables of PlayerList
                return(true)
        })
        .catch(error => {
            this.setState({hands : [], range : range, playerName: playerName}) // Update variables of PlayerList
            console.log('There is a problem with fetch operation : ' + error.message);
        })
    }

  // Arrow fx for binding
  onPlayerChange = (playerName) => {
      this.fetchPlayerHands(playerName);
  }

    componentDidMount() {
        // Listen the socketIO messages sent from the API. 
        const socket = socketIOClient(config.Constants.DuduTrackerAPI_Socket);
        socket.on('message', () => {
            this.fetchPlayerHands(this.state.playerName);
        })
    }

  render() {
      console.log("Render App")
      return (
         <div className="App">
            <div className="LeftPanel">
                <LastGamePlayers
                    changeplayerstats={this.onPlayerChange}
                />
            </div>
            <div className="RightPanel">
                <PlayerList
                    title='Select player'
                    changeplayerstats={this.onPlayerChange} 
                />
                <PlayerStats
                    playerName={this.state.playerName}
                    onClick={this.handlePlayerStatsClick}
                    range={this.state.range}
                    rangeCards={this.state.rangeCards}
                    hands={this.state.hands}
                />
            </div>
         </div>
      );
   }
}

export default App;
