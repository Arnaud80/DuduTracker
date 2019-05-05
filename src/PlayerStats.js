import React, { Component } from 'react'
import './PlayerStats.css'

class PlayerStats extends Component {
    constructor(props) {
        super();
        this.state = {
            onClick: props.onClick,
        }
    }

    getTotalRangeHand() {
        let total=0
        Object.keys(this.props.range).forEach((hand) => (
            total+=this.props.range[hand]
        ));
        return(total)
    }

    getRangePercentValue(value) {
        let total=this.getTotalRangeHand()
        if(total!==0) {
            return(value/total)
        } else return(0)
    }

    getColorForPercentage(pct) {
        var percentColors = [
        { pct: 0.00, color: { r: 0xff, g: 0xff, b: 0xff } },
        { pct: 0.01, color: { r: 0x00, g: 0xea, b: 0x00 } },
        { pct: 0.02, color: { r: 0x00, g: 0xfa, b: 0x00 } },
        { pct: 1.00, color: { r: 0x00, g: 0xff, b: 0x00 } } ];

        for (var i = 1; i < percentColors.length - 1; i++) {
            if (pct < percentColors[i].pct) break;
        }
        var lower = percentColors[i - 1];
        var upper = percentColors[i];
        var range = upper.pct - lower.pct;
        var rangePct = (pct - lower.pct) / range;
        var pctLower = 1 - rangePct;
        var pctUpper = rangePct;
        var color = {
            r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
            g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
            b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
        };
        return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
    }

    getBackgroundStyle(value) {
        return(
            {
                'backgroundColor': this.getColorForPercentage(this.getRangePercentValue(value)) 
            }
        )
    }

    render() {
        const { hands, range, rangeCards, playerName } = this.props
        console.log("Render PlayerStats")
        
        return (
            // Check if hands is populed and display result if yes 
            <div className='playerStats'>
                <div className='SelectedUser'>Stats of : {playerName}</div>
                 <div className='KnowedHands'>Know hands : 
                    {hands ? hands.length : '-'}
                </div>
                {   Object.entries(rangeCards).map((card, index) => (
                    <div className='rangeHand' style={this.getBackgroundStyle(range[rangeCards[index]])} key={index} title={range[rangeCards[index]]}>{rangeCards[index]}</div>
                ))
                }
            </div>
        )
    }
}

export default PlayerStats;