import React, {Component} from 'react';

export default class FightButton extends Component {
// Props
    // player1Object={this.props.player1Object} from APP
    // player2Object={this.props.player2Object} from APP
    // updateWinLoss={this.props.updateWinLoss} from APP
    // setWinner={this.props.setWinner}

    simulateFight = () => {
        //boolean to track when the game ends. It is first called with "false"
        let gameOver = false;

        let player1 = this.props.player1Object;
        let p1Attack = player1.attackDamage;
        // let p1Defense = player1.defenseLevel;
        let p1Hp = player1.healthPoints;
        // let p1CurrentHp = player1.currentHp;
        let player2 = this.props.player2Object;
        let p2Attack = player2.attackDamage;
        // let p2Defense = player2.defenseLevel;
        let p2Hp = player2.healthPoints;
        // let p2CurrentHp = player2.currentHp;

        while (!gameOver) {
            //player 1 attacks first
            p2Hp -= p1Attack;
            
            //is the fight over? If so set the gameOver bool
            if (p2Hp<=0) {
                gameOver=true;
                //update the win/losses data for the players
                this.props.updateWinLoss(this.props.player1Object.id, true);
                this.props.updateWinLoss(this.props.player2Object.id, false);
                this.props.setWinner("1");
            } else {
                //player 2 attacks next
                p1Hp -= p2Attack;

                //is the fight over? If so set the gameOver bool
                if (p1Hp<=0) {
                    console.log("p2 won");
                    gameOver=true;
                    //update the win/losses data for the players
                    this.props.updateWinLoss(this.props.player2Object.id, true);
                    this.props.updateWinLoss(this.props.player1Object.id, false);
                    this.props.setWinner("2");
                }
            }
        }

        //display the game results modal and end the function.
        let gameResultsModal = document.getElementById('fightResultsModal');
        gameResultsModal.style.display = "block";
    }
    
    render() {
        return (
            <button className="fightButton" onClick={() => this.simulateFight()}>Fight</button>
        )
    }
}