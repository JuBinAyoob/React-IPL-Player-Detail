import React, {Component} from 'react';

import Player from './Player';

class Team extends Component{
    constructor(props){
        super(props);
    
        this.state={
          link:props.link,
          teamVal:props.teamVal,
          showPlayer:0,
          players:[],
          getPlayerDetailsEvent:props.getPlayerDetailsEvent
        }
      }
    
      showPlayers = () =>{
        let preVal=this.state.showPlayer;
        if(preVal==0){
          this.getPlayers()
          .then(players=>{
            this.setState({showPlayer:1,players:players});
          })
          .catch(error=>{
            console.log(error);
          });
        }else{
          this.setState({showPlayer:0});
        }
      }
    
      getPlayers(){
        let params = this.state.link.split('/');

        return new Promise(function(resolve,reject){
          fetch('http://localhost:8001/getplayers/'+params[0]+"?team="+params[1])
          .then(res=>res.json())
          .then(players=>{
            resolve(players);
          })
          .catch(error=>{
            reject(error);
          })
        });
      }
    
      addPlayers(){
        let arrPlayers = this.state.players;
        return arrPlayers.map((player)=><Player key={this.state.link+"/"+player} link={this.state.link+"/"+player} playerVal={player} getPlayerDetailsEvent={this.state.getPlayerDetailsEvent}></Player>);    //key={this.state.yearVal+"/"+team}
      }

    render(){
        if(this.state.showPlayer==1){
            return(
                <div>
                    <li onClick={this.showPlayers}>{this.state.teamVal}</li>
                    <ul className="Player-List">
                        {this.addPlayers()}
                    </ul>
                </div>
            );
        }else{
            return(
                <div>
                    <li onClick={this.showPlayers}>{this.state.teamVal}</li>
                </div>
            );
        }
        
    };
}


export default Team;