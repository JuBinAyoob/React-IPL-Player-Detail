import React from 'react';
import Header from './Header';
import Year from './Year';
import PlayerDet from './PlayerDet';


class App extends React.Component {
    constructor(){
        super();
        this.state= {
            headerMessage:"Player Details",
            yearShow:0,
            years: [],
            playerDetails:[],
            playerClick:0
        }
    }
    
    componentWillMount(){
        //Ajax calls
        //timers, listeners
        this.getYears();
    }

    getYears = () =>{
        fetch("http://localhost:8001/seasons")
        .then(res =>res.json())
        .then(years=>{
            this.setState({years:years});
        })
        .catch(error=>{
            console.log(error);
        });
    }

    showYears = () => {
        let prevVal=this.state.yearShow;
        if(prevVal==0){
            this.setState({yearShow:1});
        }
        else{
            this.setState({yearShow:0});
        }
    }

    getPlayerDetails=(link,title)=>{
        fetch("http://localhost:8001/player/"+link)
        .then(res=>res.json())
        .then(playerDetail=>{
            playerDetail[0].title=title;
            this.setState({playerDetails:playerDetail}, function(){
            });
        })
        .catch(error=>{
            console.log(error);
        });
    }

    
    
    AddYears=()=>{
        let arrYears = this.state.years;
        arrYears.sort();
        return arrYears.map((data) => <Year key={data} yearVal={data} getPlayerDetailsEvent={this.getPlayerDetails.bind(this)}></Year>)
    }
    
    render(){

        if(this.state.yearShow==1){
            return (
                <div className="App">
                    <Header message={this.state.headerMessage}/>
                    <div className="IPL-body">
                        <div className="Nav-Sec">
                            <li onClick={this.showYears}>Show Years</li>
                            <ul className="Year-List">
                                {this.AddYears()}
                            </ul>
                        </div>
                        <div className="Player-Details">
                            <PlayerDet playerDetails={this.state.playerDetails}/>
                        </div>
                    </div>
                </div>  
            );
        }else{
            return (
                <div className="App">
                    <Header message={this.state.headerMessage}/>
                    <div className="IPL-body">
                        <div className="Nav-Sec"> 
                            <li onClick={this.showYears}>Show Years</li>
                        </div>
                        <div className="Player-Details">
                        </div>
                    </div>
                </div>  
            );
        }
    }
};

export default App;