import React, { Component } from 'react';
import styles from './Skills.module.css'


class Estudios extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <span>Formación Académica</span>
                
                <div>
                    {this.props.estudios.map(element =>{
                        return <img src={element} alt=""/>
                    })}

                </div>



            </div>
         );
    }
}
 
export default Estudios;