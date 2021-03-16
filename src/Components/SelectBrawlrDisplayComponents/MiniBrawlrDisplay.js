import React, {Component} from 'react';
import DeleteBrawlrButton from './MiniBrawlrDisplayComponents/DeleteBrawlrButton';
import SelectPlayerButton from './MiniBrawlrDisplayComponents/SelectPlayerButton';
import UpdateBrawlrButton from './MiniBrawlrDisplayComponents/UpdateBrawlrButton';

export default class MiniBrawlerDisplay extends Component {
// Props:
    // brawlrImg = {image}
    // brawlr={brawlr}
    // setPlayer1={this.props.setPlayer1}
    // setPlayer2={this.props.setPlayer2}
    // delete={this.props.delete}
    // setUpdateBrawlr={this.setUpdateBrawlr}

    render() {
        return (
            <div className="miniBrawlrDisplay">
                <div className="imageStatsContainer">
                    <div className="playerDisplayImage">
                        <img src={this.props.brawlrImg} alt="Brawlr Icon" />
                    </div>
                    <div className="playerBaseStats">
                        <h4>Base Stats</h4>
                        <ul className="miniList">
                            <li>Attack:<br></br>{this.props.brawlr.attackDamage}</li>
                            <li>Defense:<br></br>{this.props.brawlr.defenseLevel}</li>
                            <li>HP:<br></br>{this.props.brawlr.healthPoints}</li>
                            <li>Style:<br></br>{this.props.brawlr.fightingStyle}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>{this.props.brawlr.firstName} {this.props.brawlr.lastName}</h4>
                </div>
                <div className="playerButtons">
                    <SelectPlayerButton 
                        player={1}
                        brawlrId={this.props.brawlr.id}
                        setPlayer={this.props.setPlayer1}
                    />
                    <SelectPlayerButton 
                        player={2}
                        brawlrId={this.props.brawlr.id}
                        setPlayer={this.props.setPlayer2}
                    />
                </div>
                <div className="updateDeleteButtons">
                    <UpdateBrawlrButton 
                        setUpdateBrawlr={this.props.setUpdateBrawlr}
                        brawlrId={this.props.brawlr.id}
                    />
                    <DeleteBrawlrButton 
                        delete={this.props.delete}
                        brawlrId={this.props.brawlr.id}
                    />
                </div>
            </div>
        )
    }
}