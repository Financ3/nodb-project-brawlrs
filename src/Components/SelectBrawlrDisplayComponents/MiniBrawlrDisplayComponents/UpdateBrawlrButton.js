import React, {Component} from 'react';

export default class UpdateBrawlrButton extends Component {
// props: 
    // setUpdateBrawlr={this.props.setUpdateBrawlr}
    // brawlrId={this.props.brawlr.id}

    displayUpdateModal = () => {
        let modal=document.getElementById('updateBrawlrModal');
        modal.style.display = "flex";

        this.props.setUpdateBrawlr(this.props.brawlrId);
    }
    
    render() {
        return(
            <button className="updateBrawlrButton" onClick={this.displayUpdateModal}>Update</button>
        )
    }
}