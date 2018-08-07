import React, {Component} from 'react';



class Player extends Component{
    constructor(props){
        super(props);
        this.state={
            link: props.link,
            playerVal:props.playerVal
        };
    }

    setLink = () =>  {
        let linkDet = this.state.link.split('/');
        let getPlayerLink=linkDet[2]+"?year="+linkDet[0];
        this.props.getPlayerDetailsEvent(getPlayerLink,this.state.link);
    }

    render(){
        return(
            <li onClick={this.setLink}>{this.state.playerVal}</li>
        );
    } 
}


export default Player;