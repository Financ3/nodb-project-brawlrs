import React, {Component} from 'react';

export default class SelectPlayerButton extends Component {
// props:
    // player={X}
    // brawlrId={this.props.brawlr.id}
    // setPlayer={this.props.setPlayerX}

    render() {
        return(
            <button className="selectBrawlrButton" onClick={() => this.props.setPlayer(this.props.brawlrId)}>Select P{this.props.player}</button>
        )
    }
}