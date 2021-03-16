import React, {Component} from 'react';

export default class UpdateBrawlerModal extends Component {
// props:
    // updateBrawlr={this.state.updateBrawlr}
    // updateBrawlrFunc={this.props.updateBrawlrFunc}
    constructor() {
        super();
        this.state = {
            brawlrToUpdate: {}
        }
    }

    closeWithoutSaving() {
        let modal = document.getElementById('updateBrawlrModal');
        modal.style.display = "none";

        let inputs = document.getElementsByClassName("updateInput");
        Array.from(inputs).forEach(elem => {
            elem.value = "";
        });
    }

    saveBrawlr = () => {
        //check that all data is filled out.
        if (
            'firstName' in this.state.brawlrToUpdate &&
            'lastName' in this.state.brawlrToUpdate &&
            'title' in this.state.brawlrToUpdate &&
            'race' in this.state.brawlrToUpdate &&
            'class' in this.state.brawlrToUpdate &&
            'attackDamage' in this.state.brawlrToUpdate &&
            'defenseLevel' in this.state.brawlrToUpdate &&
            'healthPoints' in this.state.brawlrToUpdate &&
            'fightingStyle' in this.state.brawlrToUpdate &&
            'homeLocation' in this.state.brawlrToUpdate &&
            'img' in this.state.brawlrToUpdate
            ) { 
            //add the unprovided data points from the original brawler object
            let finalBrawlr = this.state.brawlrToUpdate;

            finalBrawlr.currentHp = this.props.updateBrawlr.currentHp;
            finalBrawlr.wins = this.props.updateBrawlr.wins;
            finalBrawlr.losses = this.props.updateBrawlr.wins;
            finalBrawlr.id = this.props.updateBrawlr.id;

            //send the final brawler object to the parent function to be sent to the server
            this.props.updateBrawlrFunc(finalBrawlr);
            //update the state brawler object back to an empty object
            this.setState({brawlrToUpdate: {}});
            //close the updateBrawlr Modal
            let modal = document.getElementById('updateBrawlrModal');
            modal.style.display = "none";
        } else {
            window.alert("You must fill out all fields.");
        }
    }

    handleFirstName = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.firstName = ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }

    handleLastName = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.lastName = ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }

    handleTitle = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.title = ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }

    handleRace = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.race = ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }

    handleClass = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.class = ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }
    
    handleAttackDamage = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.attackDamage = +ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }

    handleDefenseLevel = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.defenseLevel = +ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }

    handleHealthPoints = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.healthPoints = +ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }

    handleFightingStyle = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.fightingStyle = ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }

    handleHomeLocation = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.homeLocation = ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }

    handleImageURL = (ev) => {
        let newBrawlr = this.state.brawlrToUpdate;
        newBrawlr.img = ev.target.value;
        this.setState({brawlrToUpdate: newBrawlr});
    }

    render() {
        return(
            <div id="updateBrawlrModal">
                <h3>Update Brawler: </h3>
                    <div className="formContainer">
                        <div className="labelContainer">
                            <label>First Name:</label><br></br>
                            <input type="text" className="updateInput" name="firstName" placeholder={this.props.updateBrawlr.firstName} onChange={this.handleFirstName}></input>
                        </div>
                        <div className="labelContainer">
                            <label>Last Name:</label><br></br>
                            <input type="text" className="updateInput" name="lastName" placeholder={this.props.updateBrawlr.lastName} onChange={this.handleLastName}></input>
                        </div>
                        <div className="labelContainer">
                            <label>Title:</label><br></br>
                            <input type="text" className="updateInput" name="title" placeholder={this.props.updateBrawlr.title} onChange={this.handleTitle}></input>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div className="labelContainer">
                            <label>Race:</label><br></br>
                            <input type="text"name="race" className="updateInput" placeholder={this.props.updateBrawlr.race} onChange={this.handleRace}></input>
                        </div>
                        <div className="labelContainer">
                            <label>Class:</label><br></br>
                            <input type="text" name="class" className="updateInput" placeholder={this.props.updateBrawlr.class} onChange={this.handleClass}></input>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div className="labelContainer">
                            <label>Attack Damage:</label><br></br>
                            <input type="text" name="attackDamage" className="updateInput" placeholder={this.props.updateBrawlr.attackDamage} onChange={this.handleAttackDamage}></input>
                        </div>
                        <div className="labelContainer">
                            <label>Defense Level:</label><br></br>
                            <input type="text" name="defenseLevel" className="updateInput" placeholder={this.props.updateBrawlr.defenseLevel} onChange={this.handleDefenseLevel}></input>
                        </div>
                        <div className="labelContainer">
                            <label>Health Points:</label><br></br>
                            <input type="text" name="healthPoints" className="updateInput" placeholder={this.props.updateBrawlr.healthPoints} onChange={this.handleHealthPoints}></input>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div className="labelContainer">
                            <label>Fighting Style:</label><br></br>
                            <input type="text" name="fightingStyle" className="updateInput" placeholder={this.props.updateBrawlr.fightingStyle} onChange={this.handleFightingStyle}></input>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div className="labelContainer">
                            <label>Home Location:</label><br></br>
                            <input type="text" name="homeLocation" className="updateInput" placeholder={this.props.updateBrawlr.homeLocation} onChange={this.handleHomeLocation}></input>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div className="labelContainer">
                            <label >Image URL:</label><br></br>
                            <input type="text" name="img" className="updateInput" placeholder={this.props.updateBrawlr.img} onChange={this.handleImageURL}></input>
                        </div>
                    </div>

                    <button onClick={this.saveBrawlr}>Update Brawlr</button>
                    <button onClick={this.closeWithoutSaving}>Close Without Saving</button>
            </div>
        )
    }
}