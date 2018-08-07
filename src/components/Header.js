import React from 'react';


const Header = ({message}) =>{
    return(
      <div className="Header">
        <img className="Logo" src="https://image.ibb.co/ceqTUd/ipl.png"/>
        <h2 className="Header-Title text-center"> {message} </h2>
      </div>
    );
  }; 
  
  //Prop validation
  Header.propTypes = {
    message: React.PropTypes.string//.isRequired
  };

//Prop default

  Header.defaultProps = {
    message: 'Default values!'
  };

  export default Header;