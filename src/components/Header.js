import React, { Component } from 'react';

import styles from './Header.module.css'




class Header extends Component {
    state = {  }
    render() { 
        //console.log("########HeaderImg"+`${this.props.image}`);
        return (
            <div className={styles.containerHeader}>
                <img className={styles.image} src={`${this.props.image}`} alt=""/>
                <h2 className={styles.h2}>Roberto Sale</h2>
                <h4 className={styles.h4}>Web Developer</h4>
            </div>
          );
    }
}
 
export default Header;