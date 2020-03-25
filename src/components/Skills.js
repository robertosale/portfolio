import React, { Component, Fragment } from 'react';
import styles from './Skills.module.css';

class Skills extends Component {
       


    render() { 
        const {skills,style,titulo} = this.props;
        const skillsArr = Object.values(skills);
        console.log("skillsArr:::::::::::::",skillsArr);
        
        return ( 
        <div className={styles.container}>
            <span style={style}>{titulo}</span>
            <div className={styles.skillsContainer}>
            {
                skillsArr.map(elem =>
                    <img className={styles.image} src={elem} alt=""/>
                )
                
                   
            } 
                
            </div>




        </div> );
    }
}
 
export default Skills;