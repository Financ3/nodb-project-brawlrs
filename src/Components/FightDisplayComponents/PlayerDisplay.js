import React, {Component} from 'react';



export default class PlayerDisplay extends Component {
// props:
    // playerObject={this.props.playerXObject}
    // playerImage={this.props.playerXImage}
    // playerNumber="X"
    render() {
        return(
            <article className="playerDisplay">
                <h3>Player {this.props.playerNumber}</h3>
                <div className="imageStatsContainer">
                    <div className="playerDisplayImage">
                        <img src={this.props.playerImage} alt="Brawlr Icon" />
                    </div>
                    <div className="playerBaseStats">
                        <h4>Base Stats</h4>
                        <ul className="mainDisplayList">
                            <li>Attack: {this.props.playerObject.attackDamage}</li>
                            <li>Defense: {this.props.playerObject.defenseLevel}</li>
                            <li>HP: {this.props.playerObject.healthPoints}</li>
                            <li>Style: {this.props.playerObject.fightingStyle}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>{this.props.playerObject.firstName} {this.props.playerObject.lastName}</h2>
                </div>
            </article>
        )
    }
}