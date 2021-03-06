//config.js

const config = {
  DuduTrackerAPI_Players: {
    url: 'http://192.168.1.22:8080/players'
  },
  DuduTrackerAPI_PlayerHands: {
    url: 'http://192.168.1.22:8080/playerHands'
  },
  DuduTrackerAPI_LastGame: {
  url: 'http://192.168.1.22:8080/lastGame'
  },
  DuduTrackerAPI_lastGameWithStats: {
  url: 'http://192.168.1.22:8080/lastGameWithStats'
  },
  DuduTrackerAPI_Games: {
  url: 'http://192.168.1.22:8080/Games'
  },
  DuduTrackerAPI_Hands: {
  url: 'http://192.168.1.22:8080/Hands'
  },
  DuduTrackerAPI_Socket: {
    url: 'http://192.168.1.22:8081'
  },
  Constants: {
    range: {
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
    },
    valueCard: {'2':0,'3':1,'4':2,'5':3,'6':4,'7':5,'8':6,'9':7,'T':8,'J':9,'Q':10,'K':11,'A':12},
    rangeCards: [
        'AA', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
        'AKo', 'KK', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s',
        'AQo', 'KQo', 'QQ', 'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s', 'Q4s', 'Q3s', 'Q2s',
        'AJo', 'KJo', 'QJo', 'JJ', 'JTs', 'J9s', 'J8s', 'J7s', 'J6s', 'J5s', 'J4s', 'J3s', 'J2s',
        'ATo', 'KTo', 'QTo', 'JTo', 'TT', 'T9s', 'T8s', 'T7s', 'T6s', 'T5s', 'T4s', 'T3s', 'T2s',
        'A9o', 'K9o', 'Q9o', 'J9o', 'T9o', '99', '98s', '97s', '96s', '95s', '94s', '93s', '92s',
        'A8o', 'K8o', 'Q8o', 'J8o', 'T8o', '98o', '88', '87s', '86s', '85s', '84s', '83s', '82s',
        'A7o', 'K7o', 'Q7o', 'J7o', 'T7o', '97o', '87o', '77', '76s', '75s', '74s', '73s', '72s',
        'A6o', 'K6o', 'Q6o', 'J6o', 'T6o', '96o', '86o', '76o', '66', '65s', '64s', '63s', '62s',
        'A5o', 'K5o', 'Q5o', 'J5o', 'T5o', '95o', '85o', '75o', '65o', '55', '54s', '53s', '52s',
        'A4o', 'K4o', 'Q4o', 'J4o', 'T4o', '94o', '84o', '74o', '64o', '54o', '44', '43s', '42s',
        'A3o', 'K3o', 'Q3o', 'J3o', 'T3o', '93o', '83o', '73o', '63o', '53o', '43o', '33', '32s',
        'A2o', 'K2o', 'Q2o', 'J2o', 'T2o', '92o', '82o', '72o', '62o', '52o', '42o', '32o', '22'
    ]
}}

module.exports = config