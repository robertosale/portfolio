import React, { Component } from 'react';
import mifoto from './img/mifoto.jpeg'
import Header from './components/Header'
import SkillsBar from './components/SkillsBar'
import './App.css'

const SKILLS = [
  {type: "HTML", level: 99},
  {type: "CSS", level: 98},
  {type: "JavaScript", level: 87},
  {type: "jQuery", level: 92},
  {type: "BootStrap", level: 90},
  {type: "Photoshop", level: 100},
  {type: "Angular.js", level: 16},
  {type: "React.js", level: 25},
  {type: "PHP", level: 36},
  {type: "Ruby", level: 11}
];


class App extends Component {
  state = { 
    image: mifoto
   }
  render() { 
    return (
      <div className="container">
        
        <Header image={this.state.image}/>
        <SkillsBar hue="300" saturation="40" skills={SKILLS}/>

      </div>
      );
  }
}
 
export default App;