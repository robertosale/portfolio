import React, { Component } from 'react';
import styles from './Estudios.module.css'


class Estudios extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.container}>

                <span className={styles.titulo}>Formación Académica</span>
                <div className={styles.institucionContainer}>
                    
                    
                    
                        {this.props.estudios.map(element =>{
                            return (
                            <div className={styles.detallesContainer}>
                                <img className={styles.image} src={element.logo} alt=""/>

                                <span>{element.nombre}</span>
                                <span>{element.descripcion}</span>
                                <span>{element.promocion}</span>
                            </div>
                            )                      
                            
                            
                            
                        })}

                    



                    </div>

            </div>
         );
    }
}
 
export default Estudios;