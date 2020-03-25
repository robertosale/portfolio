import React, { Component } from 'react';


import styles from './App.module.css';


import Header from './components/Header';
import Skills from './components/Skills';
import Estudios from './components/Estudios';

import {firebaseApp} from './firebase';



const userRef = firebaseApp.database().ref().child('user');

class App extends Component {
  state = { 
    user:{
      avatar:"",
      estudios:[],
      skills:[]

    }

  }

  

  componentWillMount(){
    this.listenForUser();
    
  }

  listenForUser(){
    console.log(userRef);
    userRef.on('value', snap =>{
      
      const user={
        avatar: snap.val().avatar,
        estudios: snap.val().estudios,
        skills: snap.val().skills,
        _key: snap.key
      }
      
      this.setState({user: user, isLoading: false})

      


    });
  }


  render() { 

    const {avatar, estudios, skills} = this.state.user;

   

    //console.log("skills::::::::::::(1)",skills)

    return (
      <div className={`${styles.containerApp} ${styles.terciary}`} >
        
        <Header image={avatar}/>

        <span className={styles.descripcion}>Front End Developer de la escuela de Alex. React rules!</span>

        

        <Skills className={styles.skills} skills={skills} style={{"font-size":"x-large","color":"#B1D4E0"}} titulo='Skills'/>

        <Estudios className={styles.skills} estudios={estudios}  />
        

      </div>
      );
  }
}
 
export default App;