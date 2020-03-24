import React, { Component } from 'react';
import mifoto from './img/mifoto.jpeg';

import styles from './App.module.css';

import html5Logo from './img/html5-logo.png';
import cssLogo from './img/css-logo.jpg';
import jsLogo from './img/JavaScript-logo.png';
import reactLogo from './img/react-logo.png' ;

import tulioLogo from './img/tulioLogo.png';
import untLogo from './img/untLogo.png';

import Header from './components/Header';
import Skills from './components/Skills';
import Estudios from './components/Estudios';


class App extends Component {
  state = { 
    image: mifoto,
    skills: [html5Logo,cssLogo,jsLogo,reactLogo],
    estudios:         [{
                          nombre:"Colegio Tulio Garcia Fernández",
                          promocion:"2006",
                          descripcion:"Bachiller Economico",
                          logo: tulioLogo
                        },
                        {
                          nombre:"Universidad Nacional de Tucumán",
                          promocion:"2014-actual",
                          descripcion:"Ingeniería en Computación",
                          logo: untLogo
                        }]
   }
  render() { 
    return (
      <div className={`${styles.containerApp} ${styles.terciary}`} >
        
        <Header image={this.state.image}/>

        <span className={styles.descripcion}>Front End Developer de la escuela de Alex. React rules!</span>

        <Skills className={styles.skills} skills={this.state.skills} style={{"font-size":"x-large","color":"#B1D4E0"}} titulo='Skills'/>

        <Estudios className={styles.skills} estudios={this.state.estudios}  />
        

      </div>
      );
  }
}
 
export default App;