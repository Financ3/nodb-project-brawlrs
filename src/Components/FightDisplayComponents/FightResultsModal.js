import React, {Component} from 'react';

export default class FightResultsModal extends Component {
// Props:
    // winner={this.props.winner}

    close() {
        let modal = document.getElementById('fightResultsModal');
        modal.style.display = "none";
    }
    render() {
        return(
            <article id="fightResultsModal">
                <p>Fight Results:</p>
                <p>Player {this.props.winner} Won!</p>
                <button onClick={this.close}>Close</button>
            </article>
        )
    }
}