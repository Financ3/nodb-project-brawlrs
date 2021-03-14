import React, {Component} from 'react';
import FightButton from './FightDisplayComponents/FightButton';
import FightResultsModal from './FightDisplayComponents/FightResultsModal';
import PlayerDisplay from './FightDisplayComponents/PlayerDisplay';

export default class FightDisplay extends Component {
    
    render() {
        return (
            <section className="fightDisplay">
                <p>This is the Fight Display</p>
                <PlayerDisplay />
                <FightButton />
                <PlayerDisplay />

                <FightResultsModal />
            </section>
        )
    }
}