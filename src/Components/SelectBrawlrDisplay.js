import React, {Component} from 'react';
import AddBrawlrModal from './SelectBrawlrDisplayComponents/AddBrawlrModal';
import MiniBrawlrDisplay from './SelectBrawlrDisplayComponents/MiniBrawlrDisplay';
import UpdateBrawlrModal from './SelectBrawlrDisplayComponents/UpdateBrawlrModal';

export default class SelectBrawlerDisplay extends Component {
    
    render() {
        return(
            <section className="selectBrawlrDisplay">
                <MiniBrawlrDisplay />
                <MiniBrawlrDisplay />
                <MiniBrawlrDisplay />
                <MiniBrawlrDisplay />
                <MiniBrawlrDisplay />
                <MiniBrawlrDisplay />
                <MiniBrawlrDisplay />
                <MiniBrawlrDisplay />
                <MiniBrawlrDisplay />
                <MiniBrawlrDisplay />
                <AddBrawlrModal />
                <UpdateBrawlrModal />
            </section>
        )
    }
}