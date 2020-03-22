import React, { Component } from 'react';
import './Header.css'




class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                <img className="image" src={ this.props.image} alt=""/>
                <h2>Roberto Sale</h2>
                <h4>Web Developer</h4>
            </div>
          );
    }
}
 
export default Header;