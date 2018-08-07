import React, {Component, Fragment} from 'react';

class PlayerDet extends Component{


    render(){
        let playerDetails = this.props.playerDetails;

        if(playerDetails.length!=0){
            let playerTitle=playerDetails[0].title.split('/');
            return(
                <div className="Player-Body">
                    <h3 className="Player-Det-Header">Players details At Season:{playerTitle[0]}</h3>
                    <div className="Player-Det">
                        <div className="Sub-Title">
                            Player Name:
                        </div>
                        <div className="Title-Det">
                            {playerDetails[0]._id}
                        </div>
                        <div className="Sub-Title">
                            Current Team:
                        </div>
                        <div className="Title-Det">
                            {playerTitle[1]}
                        </div>
                        <div className="Sub-Title">
                            Batsman Runs:
                        </div>
                        <div className="Title-Det">
                            {playerDetails[0].batsman_runs}
                        </div>
                        <div className="Sub-Title">
                            Number of Overs:
                        </div>
                        <div className="Title-Det">
                            {playerDetails[0].numOfOvers}
                        </div>
                        <div className="Sub-Title">
                            Wickets Got:
                        </div>
                        <div className="Title-Det">
                            {playerDetails[0].wickets}
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div>
                </div>
            );
        }
    }
}

export default PlayerDet;