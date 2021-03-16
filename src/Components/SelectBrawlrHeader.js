import React, {Component} from 'react';
// import Search from './SelectBrawlrHeaderComponents/Search';
import AddBrawlrButton from './SelectBrawlrHeaderComponents/AddBrawlrButton';

export default class SelectBrawlerHeader extends Component {
    
    render() {
        return (
            <section className="selectBrawlrHeader">
                <h2 className="selectBrawlrTitle">Select Your Brawlr</h2>
                {/* <Search /> */}
                <AddBrawlrButton />
            </section>
        )
    }
}