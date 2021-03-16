import React, {Component} from 'react';
import Header from './Components/Header';
import FightDisplay from './Components/FightDisplay';
import SelectBrawlrHeader from './Components/SelectBrawlrHeader';
import SelectBrawlrDisplay from './Components/SelectBrawlrDisplay';
import Footer from './Components/Footer';
import axios from 'axios';

//import all the initial/default images
import akkaz from './images/AkKAz.png';
import azgirak from './images/AzGirak.png';
import festurg from './images/FesturgG.png';
import khadrash from './images/Khadrash.png';
import khresh from './images/KhreshK.png';
import vikarza from './images/Vikarza.png';
import waz from './images/Waz.png';
import worrika from './images/Worrika.png';
import zhorkak from './images/Zhorkak.png';
import zoskad from './images/Zoskad.png';

import './App.css';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      brawlrArrayFull: [],
      brawlrArrayDisplay: [],
      player1Object: {},
      player2Object: {},
      player1Image: "",
      player2Image: "",
      winner: ""
    }
  }

  componentDidMount() {
    axios.get('/api/brawlrs/')
      .then(res => {
        //identify the image for player 1
        let imageP1 = "";
        if (res.data[0].img==="AkKAz.png") {
          imageP1 = akkaz;
        } else if (res.data[0].img==="AzGirak.png") {
          imageP1 = azgirak;
        } else if (res.data[0].img==="FesturgG.png") {
          imageP1 = festurg
        } else if (res.data[0].img==="Khadrash.png") {
          imageP1 = khadrash;
        } else if (res.data[0].img==="KhreshK.png") {
          imageP1 = khresh;
        } else if (res.data[0].img==="Vikarza.png") {
          imageP1 = vikarza;
        } else if (res.data[0].img==="Waz.png") {
          imageP1 = waz;
        } else if (res.data[0].img==="Worrika.png") {
          imageP1 = worrika;
        } else if (res.data[0].img==="Zhorkak.png") {
          imageP1 = zhorkak;
        } else if (res.data[0].img==="Zoskad.png") {
          imageP1 = zoskad;
        } else {
          imageP1 = res.data[0].img;
        }
        //identify the image for player 2
        let imageP2 = "";
        if (res.data[1].img==="AkKAz.png") {
          imageP2 = akkaz;
        } else if (res.data[1].img==="AzGirak.png") {
          imageP2 = azgirak;
        } else if (res.data[1].img==="FesturgG.png") {
          imageP2 = festurg
        } else if (res.data[1].img==="Khadrash.png") {
          imageP2 = khadrash;
        } else if (res.data[1].img==="KhreshK.png") {
          imageP2 = khresh;
        } else if (res.data[1].img==="Vikarza.png") {
          imageP2 = vikarza;
        } else if (res.data[1].img==="Waz.png") {
          imageP2 = waz;
        } else if (res.data[1].img==="Worrika.png") {
          imageP2 = worrika;
        } else if (res.data[1].img==="Zhorkak.png") {
          imageP2 = zhorkak;
        } else if (res.data[1].img==="Zoskad.png") {
          imageP2 = zoskad;
        } else {
          imageP2 = res.data[1].img;
        }

        this.setState({
          brawlrResetArray: res.data,
          brawlrArrayFull: res.data, 
          brawlrArrayDisplay: res.data,
          player1Object: res.data[0],
          player2Object: res.data[1],
          player1Image: imageP1,
          player2Image: imageP2
        });
      })
      .catch(err => console.log(err))
  }

  setPlayer1 = (brawlrId) => {
    let brawlrP1 = {};
    let brawlrArray = this.state.brawlrArrayFull;
    brawlrP1 = brawlrArray.find(brawlr => brawlr.id===brawlrId);
    this.setState({player1Object: brawlrP1});

    //handle the image update
    //check if it's one of the default brawlrs
    //handle the image update
    //check if its one of the default brawlers
    let image = "";
    if (brawlrP1.img==="AkKAz.png") {
        image = akkaz;
    } else if (brawlrP1.img==="AzGirak.png") {
        image = azgirak;
    } else if (brawlrP1.img==="FesturgG.png") {
        image = festurg
    } else if (brawlrP1.img==="Khadrash.png") {
        image = khadrash;
    } else if (brawlrP1.img==="KhreshK.png") {
        image = khresh;
    } else if (brawlrP1.img==="Vikarza.png") {
        image = vikarza;
    } else if (brawlrP1.img==="Waz.png") {
        image = waz;
    } else if (brawlrP1.img==="Worrika.png") {
        image = worrika;
    } else if (brawlrP1.img==="Zhorkak.png") {
        image = zhorkak;
    } else if (brawlrP1.img==="Zoskad.png") {
        image = zoskad;
    } else {
        image = brawlrP1.img;
    }

    this.setState({player1Image: image});
  }

  setPlayer2 = (brawlrId) => {
    let brawlrP2 = {};
    let brawlrArray = this.state.brawlrArrayFull;
    brawlrP2 = brawlrArray.find(brawlr => brawlr.id===brawlrId);
    this.setState({player2Object: brawlrP2});

    //handle the image update
    //check if its one of the default brawlers
    let image = "";
    if (brawlrP2.img==="AkKAz.png") {
        image = akkaz;
    } else if (brawlrP2.img==="AzGirak.png") {
        image = azgirak;
    } else if (brawlrP2.img==="FesturgG.png") {
        image = festurg
    } else if (brawlrP2.img==="Khadrash.png") {
        image = khadrash;
    } else if (brawlrP2.img==="KhreshK.png") {
        image = khresh;
    } else if (brawlrP2.img==="Vikarza.png") {
        image = vikarza;
    } else if (brawlrP2.img==="Waz.png") {
        image = waz;
    } else if (brawlrP2.img==="Worrika.png") {
        image = worrika;
    } else if (brawlrP2.img==="Zhorkak.png") {
        image = zhorkak;
    } else if (brawlrP2.img==="Zoskad.png") {
        image = zoskad;
    } else {
        image = brawlrP2.img;
    }

    this.setState({player2Image: image});
  }

  updateWinLoss = (id, wonBool) => {
    let fightQuery = "";
    wonBool ? fightQuery="won":fightQuery="lost";
    axios.put(`/api/brawlrs/${id}?fight=${fightQuery}`)
    .then( res => {
      this.setState({brawlrArrayFull: res.data});
    })
    .catch(err => console.log(err))
  }

  setWinner = (winnerNumber) => {
    this.setState({winner: winnerNumber});
  }

  delete = (id) => {
    axios.delete(`/api/brawlrs/${id}`)
    .then( res => {
      this.setState({brawlrArrayFull: res.data});
      this.setState({brawlrArrayDisplay: res.data});
    })
    .catch(err => console.log(err))
  }

  updateBrawlrFunc = (brawlerObject) => {
    let id = brawlerObject.id;
    let body = brawlerObject;

    axios.put(`/api/brawlrs/${id}`, body)
    .then(res => {
      this.setState({brawlrArrayFull: res.data});
      this.setState({brawlrArrayDisplay: res.data});
    })
    .catch(err => console.log(err));

    if (+body.id===+this.state.player1Object.id) {
      this.setState({player1Object: body});
      this.setState({player1Image: body.img});
    } else if (+body.id===+this.state.player2Object.id) {
      this.setState({player2Object: body});
      this.setState({player2Image: body.img});
    }
  }

  addNewBrawlr = (brawlrObject) => {
    //the server will add the ID for this new brawlr.

    axios.post(`/api/brawlrs/`, brawlrObject)
    .then(res => {
      this.setState({brawlrArrayFull: res.data});
      this.setState({brawlrArrayDisplay: res.data});
    })
    .catch(err => console.log(err));
  }
    
  render() {
    return (
      <div className="App">
        <Header />
        <FightDisplay 
          player1Object={this.state.player1Object}
          player2Object={this.state.player2Object}
          player1Image={this.state.player1Image}
          player2Image={this.state.player2Image}
          updateWinLoss={this.updateWinLoss}
          setWinner={this.setWinner}
          winner={this.state.winner}
        />
        <SelectBrawlrHeader/>
        <SelectBrawlrDisplay 
          brawlrArrayDisplay={this.state.brawlrArrayDisplay}
          setPlayer1={this.setPlayer1}
          setPlayer2={this.setPlayer2}
          delete={this.delete}
          updateBrawlrFunc={this.updateBrawlrFunc}
          addNewBrawlr={this.addNewBrawlr}
          //the starting default images
          akkaz = {akkaz}
          azgirak = {azgirak}
          festurg = {festurg}
          khadrash = {khadrash}
          khresh = {khresh}
          vikarza = {vikarza}
          waz = {waz}
          worrika = {worrika}
          zhorkak = {zhorkak}
          zoskad = {zoskad}
          />
        <Footer />
      </div>
    )
  }
}
