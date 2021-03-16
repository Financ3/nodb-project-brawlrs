import React, {Component} from 'react';
import AddBrawlrModal from './SelectBrawlrDisplayComponents/AddBrawlrModal';
import MiniBrawlrDisplay from './SelectBrawlrDisplayComponents/MiniBrawlrDisplay';
import UpdateBrawlrModal from './SelectBrawlrDisplayComponents/UpdateBrawlrModal';

export default class SelectBrawlerDisplay extends Component {
// props
    // brawlrArrayDisplay={this.state.brawlrArrayDisplay}
    // setPlayer1={this.setPlayer1}
    // setPlayer2={this.setPlayer2}
    // delete={this.delete}
    // updateBrawlrFunc={this.updateBrawlrFunc}
    // addNewBrawlr={this.addNewBrawlr}

//default images sent on prop. 
    // akkaz = {akkaz}
    // azgirak = {azgirak}
    // festurg = {festurg}
    // khadrash = {khadrash}
    // khresh = {khresh}
    // vikarza = {vikarza}
    // waz = {waz}
    // worrika = {worrika}
    // zhorkak = {zhorkak}
    // zoskad = {zoskad}
    constructor() {
        super();
        this.state = {
            brawlrImg: "",
            updateBrawlr: {}
        }
    }

    setUpdateBrawlr = (id) => {
        let brawlrForUpdate = this.props.brawlrArrayDisplay.find(elem => elem.id === id);
        this.setState({updateBrawlr: brawlrForUpdate});
    }
    
    render() {
        return(
            <section className="selectBrawlrDisplay">
                {this.props.brawlrArrayDisplay.map( brawlr => {
                    //determine if a default image needs to be provided
                    let image = "";
                    if (brawlr.img==="AkKAz.png") {
                        image = this.props.akkaz;
                    } else if (brawlr.img==="AzGirak.png") {
                        image = this.props.azgirak;
                    } else if (brawlr.img==="FesturgG.png") {
                        image = this.props.festurg
                    } else if (brawlr.img==="Khadrash.png") {
                        image = this.props.khadrash;
                    } else if (brawlr.img==="KhreshK.png") {
                        image = this.props.khresh;
                    } else if (brawlr.img==="Vikarza.png") {
                        image = this.props.vikarza;
                    } else if (brawlr.img==="Waz.png") {
                        image = this.props.waz;
                    } else if (brawlr.img==="Worrika.png") {
                        image = this.props.worrika;
                    } else if (brawlr.img==="Zhorkak.png") {
                        image = this.props.zhorkak;
                    } else if (brawlr.img==="Zoskad.png") {
                        image = this.props.zoskad;
                    } else {
                        image = brawlr.img;
                    }

                    return (
                        <MiniBrawlrDisplay key={brawlr.id}
                            brawlrImg = {image}
                            brawlr={brawlr}
                            setPlayer1={this.props.setPlayer1}
                            setPlayer2={this.props.setPlayer2}
                            delete={this.props.delete}
                            setUpdateBrawlr={this.setUpdateBrawlr}
                        />
                    )
                })}
                <AddBrawlrModal 
                    addNewBrawlr={this.props.addNewBrawlr}
                />
                <UpdateBrawlrModal 
                    updateBrawlr={this.state.updateBrawlr}
                    updateBrawlrFunc={this.props.updateBrawlrFunc}
                />
            </section>
        )
    }
}