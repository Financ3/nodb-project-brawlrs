import React, {Component} from 'react';

export default class PlayerDisplay extends Component {
    
    render() {
        return(
            <article className="playerDisplay">
                <h3>Player X</h3>
                <div className="imageStatsContainer">
                    <div className="playerDisplayImage">
                        <img src="C:\Documents\programming\devmtn\week4\9-nodb-project-brawlrs\server\Data\images\AkKAz.png" alt="Brawlr Image" />
                    </div>
                    <div className="playerBaseStats">
                        <h4>Base Stats</h4>
                        <ul>
                            <li>stat 1</li>
                            <li>stat 1</li>
                            <li>stat 1</li>
                            <li>stat 1</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>Brawlr Name</h4>
                </div>
            </article>
        )
    }
}