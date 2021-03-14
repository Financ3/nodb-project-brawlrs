import React, {Component} from 'react';

export default class UpdateBrawlerModal extends Component {
    
    render() {
        return(
            <div className="updateBrawlrModal">
                <h3>Update Brawler: </h3>
                <form action="">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value="First Name"></input>

                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value="Last Name"></input>
                    <br></br>
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" value="Title"></input>
                    <br></br>
                    <label for="race">Race:</label>
                    <input type="text" id="race" name="race" value="Race"></input>
                    
                    <label for="class">Class:</label>
                    <input type="text" id="class" name="class" value="Class"></input>
                    <br></br>
                    <label for="attackDamage">Attack Damage:</label>
                    <input type="text" id="attackDamage" name="attackDamage" value="Attack Damage"></input>

                    <label for="defenseLevel">Defense Level:</label>
                    <input type="text" id="defenseLevel" name="defenseLevel" value="Defense Level"></input>

                    <label for="healthPoints">Health Points:</label>
                    <input type="text" id="healthPoints" name="healthPoints" value="Health Points"></input>
                    <br></br>
                    <label for="fightingStyle">Fighting Style:</label>
                    <input type="text" id="fightingStyle" name="fightingStyle" value="Fighting Style"></input>

                    <label for="homeLocation">Home Location:</label>
                    <input type="text" id="homeLocation" name="homeLocation" value="Home Location"></input>
                    <br></br>
                    <label for="img">Image URL:</label>
                    <input type="text" id="img" name="img" value="Image URL"></input>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                </form> 
            </div>
        )
    }
}