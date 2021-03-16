import React, {Component} from 'react';

export default class AddBrawlerModal extends Component {
// props:
    // addNewBrawlr={this.props.addNewBrawlr}
    constructor() {
        super();
        this.state = {
            brawlrToAdd: {}
        }
    }

    closeWithoutSaving() {
        let modal = document.getElementById('addBrawlrModal');
        modal.style.display = "none";

        let inputs = document.getElementsByClassName("addInput");
        Array.from(inputs).forEach(elem => {
            elem.value = "";
        });
    }

    saveNewBrawlr = () => {
        //check that all data is filled out.
        if (
            'firstName' in this.state.brawlrToAdd &&
            'lastName' in this.state.brawlrToAdd &&
            'title' in this.state.brawlrToAdd &&
            'race' in this.state.brawlrToAdd &&
            'class' in this.state.brawlrToAdd &&
            'attackDamage' in this.state.brawlrToAdd &&
            'defenseLevel' in this.state.brawlrToAdd &&
            'healthPoints' in this.state.brawlrToAdd &&
            'fightingStyle' in this.state.brawlrToAdd &&
            'homeLocation' in this.state.brawlrToAdd &&
            'img' in this.state.brawlrToAdd
            ) { 
            //add the unprovided data points from the original brawler object
            let finalBrawlr = this.state.brawlrToAdd;

            finalBrawlr.currentHp = this.state.brawlrToAdd.currentHp;
            finalBrawlr.wins = 0;
            finalBrawlr.losses = 0;

            //send the final brawler object to the parent function to be sent to the server
            this.props.addNewBrawlr(finalBrawlr);

            //update the state brawler object back to an empty object
            this.setState({brawlrToAdd: {}});
            //close the updateBrawlr Modal
            let modal = document.getElementById('addBrawlrModal');
            modal.style.display = "none";
        } else {
            window.alert("You must fill out all fields.");
        }
    }

    handleFirstName = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.firstName = ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
        
    }

    handleLastName = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.lastName = ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
        
    }

    handleTitle = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.title = ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
        
    }

    handleRace = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.race = ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
        
    }

    handleClass = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.class = ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
        
    }
    
    handleAttackDamage = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.attackDamage = +ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
        
    }

    handleDefenseLevel = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.defenseLevel = +ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
        
    }

    handleHealthPoints = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.healthPoints = +ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
        
    }

    handleFightingStyle = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.fightingStyle = ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
        
    }

    handleHomeLocation = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.homeLocation = ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
        
    }

    handleImageURL = (ev) => {
        let newBrawlr = this.state.brawlrToAdd;
        newBrawlr.img = ev.target.value;
        this.setState({brawlrToAdd: newBrawlr});
    }

    render() {
        return(
            <div id="addBrawlrModal">
                <h3>Add Brawler: </h3>
                    <div className="formContainer">
                        <div className="labelContainer">
                            <label>First Name:</label><br></br>
                            <input className="addInput" onChange={this.handleFirstName}></input>
                        </div>
                        <div className="labelContainer">
                            <label>Last Name:</label><br></br>
                            <input className="addInput" onChange={this.handleLastName}></input>
                        </div>
                        <div className="labelContainer">
                            <label>Title:</label><br></br>
                            <input className="addInput" onChange={this.handleTitle}></input>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div className="labelContainer">
                            <label>Race:</label><br></br>
                            <input className="addInput" onChange={this.handleRace}></input>
                        </div>
                        <div className="labelContainer">
                            <label>Class:</label><br></br>
                            <input className="addInput" onChange={this.handleClass}></input>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div className="labelContainer">
                            <label>Attack Damage:</label><br></br>
                            <input className="addInput" onChange={this.handleAttackDamage}></input>
                        </div>
                        <div className="labelContainer">
                            <label>Defense Level:</label><br></br>
                            <input className="addInput" onChange={this.handleDefenseLevel}></input>
                        </div>
                        <div className="labelContainer">
                            <label>Health Points:</label><br></br>
                            <input className="addInput" onChange={this.handleHealthPoints}></input>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div className="labelContainer">
                            <label>Fighting Style:</label><br></br>
                            <input className="addInput" onChange={this.handleFightingStyle}></input>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div className="labelContainer">
                            <label>Home Location:</label><br></br>
                            <input className="addInput" onChange={this.handleHomeLocation}></input>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div className="labelContainer">
                            <label >Image URL:</label><br></br>
                            <input className="addInput" onChange={this.handleImageURL}></input>
                        </div>
                    </div>

                    <button onClick={this.saveNewBrawlr}>Save Brawlr</button>
                    <button onClick={this.closeWithoutSaving}>Close Without Saving</button>
            </div>
        )
    }
}

/*
    id: 1,
    firstName: 'Ak',
    lastName: 'Kaz',
    title: 'The Terrible',
    race: 'Orc',
    class: 'Warrior',
    attackDamage: 15,
    defenseLevel: 9,
    healthPoints: 30,
    fightingStyle: 'Melee/Ranged',
    wins: 0,
    losses: 0,
    homeLocation: 'Dar Crala',
    img: "C:Documents%2Fdevmountain%2Fnodb-brawlrs%2Fserver%2FData%2Fimages%2FAkKAz.png"

*/