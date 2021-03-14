import React, {Component} from 'react';

export default class Search extends Component {
    
    render() {
        return (
            <div className="search">
                <p>Search By Brawlr Name:</p>
                <input placeholder="search"></input>
                <button>Search</button>
            </div>
        )
    }
}