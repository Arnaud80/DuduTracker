import React, { Component } from 'react'
//import Dropdown from 'react-dropdown'
//import 'react-dropdown/style.css'
import Autosuggest from 'react-autosuggest';

const config = require('./config');

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.PlayerName;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.PlayerName}
  </div>
);

class PlayerList extends Component {
    constructor(props) {
        super();
        this.state = {
            players :[],
            defaultPlayer : '',
            title: props.title,
            onChange : props.onChange,
            value: '',
            suggestions: [],
        }
    }

    componentDidMount() {
        
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });

        this.props.changeplayerstats(newValue)
     };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    fetch(config.DuduTrackerAPI_Players.url + '/' + value + '?maxResultat=10') // Call API function to retreive list of players
        .then(results => {
            return results.json(); // Transform the data into json
        }).then(data => {
            let players = data.results.map((player) => { // Convert the json in array
                return (
                    player.PlayerName
                )
            })
            this.setState({suggestions : data.results, defaultPlayer : players[0]}) // Update variables of PlayerList
        })
        .catch(function(error) {
            console.log('There is a problem with fetch operation : ' + error.message);
        })
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Type a player name',
            value,
            onChange: this.onChange
        };

        console.log("Render PlayerList")
        return (
            /*<div>
                <Dropdown options={this.state.players} value='' placeholder={this.state.title} onChange={this.state.onChange} />
            </div>*/
            <div className='Autosuggest'>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
            </div>
        )
    }
}

export default PlayerList;