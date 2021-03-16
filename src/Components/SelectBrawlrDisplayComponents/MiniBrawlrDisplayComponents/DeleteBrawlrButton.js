import React, {Component} from 'react';

export default class DeleteBrawlrButton extends Component {
// props:
    // delete={this.props.delete}
    // brawlrId={this.props.brawlr.id}
    render() {
        return(
            <button className="deleteBrawlrButton" onClick={() => this.props.delete(this.props.brawlrId)}>Delete</button>
        )
    }
}