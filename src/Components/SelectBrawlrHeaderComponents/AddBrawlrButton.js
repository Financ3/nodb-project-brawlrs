import React, {Component} from 'react';

export default class AddBrawlerButton extends Component {

    displayAddModal(){
        let modal = document.getElementById('addBrawlrModal');
        modal.style.display = "flex";
    }

    render() {
        return(
            <button className="addBrawlerButton" onClick={this.displayAddModal}>Add New Brawler</button>
        )
    }
}