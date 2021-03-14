import React, {Component} from 'react';

export default class FightResultsModal extends Component {
    
    render() {
        return(
            <article className="fightResultsModal">
                <p>Fight Results:</p>
                <p>Player X Won!</p>
                <button>Close</button>
            </article>
        )
    }
}