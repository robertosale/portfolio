import React, { Component } from 'react';
import styles from './Skills.module.css';

class Skills extends Component {
    state = {  }
    render() { 
        return ( 
        <div className={styles.container}>
            <span style={this.props.style}>{this.props.titulo}</span>
            <div className={styles.skillsContainer}>
                {this.props.skills.map(element => {
                    return <img className={styles.image} src={element} alt=""/>
                })}
            </div>




        </div> );
    }
}
 
export default Skills;