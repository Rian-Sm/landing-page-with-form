import React from 'react';
import { styles } from './styles';
import {ReactComponent as Logo}  from './assets/logo.svg';
import { Form } from './components/form';
import { Frase } from './components/frase';

import './assets/fonts/Montserrat-Bold.ttf'
import './assets/fonts/Montserrat-Medium.ttf'
import './assets/fonts/Montserrat-Light.ttf'

export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.background}>
        <div  style={styles.description}>
          
          <Logo style={styles.logo}></Logo> 

          <Frase></Frase> 
        </div>

      </div>
      <div style={styles.form}>
        <Form></Form>
      </div>
    </div>
  );
}
