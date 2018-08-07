import React, {Component} from 'react';
import Team from './Team';

class Year extends Component{
  constructor(props){
    super(props);

    this.state={
      yearVal:props.yearVal,
      showTeam:0,
      teams:[],
      getPlayerDetailsEvent:props.getPlayerDetailsEvent
    }
  }

  showTeams = () =>{
    let preVal=this.state.showTeam;
    if(preVal==0){
      this.getTeams()
      .then(teams=>{
        teams.sort();
        this.setState({showTeam:1,teams:teams});
      })
      .catch(error=>{
        console.log(error);
      });
    }else{
      this.setState({showTeam:0});
    }
  }

  getTeams(){
    let curYear = this.state.yearVal;
    return new Promise(function(resolve,reject){
      fetch('http://localhost:8001/teams?year='+curYear)
      .then(res=>res.json())
      .then(teams=>{
        resolve(teams);
      })
      .catch(error=>{
        reject(error);
      })
    });
  }

  addTeams(){
    let arrTeams = this.state.teams;
    return arrTeams.map((team)=><Team key={this.state.yearVal+"/"+team} link={this.state.yearVal+"/"+team} getPlayerDetailsEvent={this.state.getPlayerDetailsEvent} teamVal={team}></Team>);
  }

  render(){
    if(this.state.showTeam==1){
      return(
        <div>
          <li onClick={this.showTeams} > {this.state.yearVal} </li>
          <ul className="Team-List">
              {this.addTeams()}
          </ul>
        </div>
      );
    }else{
      return(
        <div>
          <li onClick={this.showTeams} > {this.state.yearVal} </li>
        </div>
      );
    }
  }
}
  
export default Year;