import React, {Component} from 'react';
import FightButton from './FightDisplayComponents/FightButton';
import FightResultsModal from './FightDisplayComponents/FightResultsModal';
import PlayerDisplay from './FightDisplayComponents/PlayerDisplay';

export default class FightDisplay extends Component {
// Props:
    // player1Object={this.state.player1Object}
    // player2Object={this.state.player2Object}
    // player1Image={this.state.player1Image}
    // player2Image={this.state.player2Image}
    // updateWinLoss={this.updateWinLoss}
    // setWinner={this.setWinner}
    // winner={this.state.winner}

    render() {
        return (
            <section className="fightDisplay">
                <PlayerDisplay 
                    playerObject={this.props.player1Object}
                    playerImage={this.props.player1Image}
                    playerNumber="1"
                />
                <FightButton 
                    player1Object={this.props.player1Object}
                    player2Object={this.props.player2Object}
                    updateWinLoss={this.props.updateWinLoss}
                    setWinner={this.props.setWinner}
                />
                <PlayerDisplay 
                    playerObject={this.props.player2Object}
                    playerImage={this.props.player2Image}
                    playerNumber="2"
                />

                <FightResultsModal 
                    winner={this.props.winner}
                />
            </section>
        )
    }
}