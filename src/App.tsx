import React from 'react';
import { styles } from './styles';
import {ReactComponent as Logo}  from './assets/logo.svg';
import { Form } from './components/form';
import { Frase } from './components/frase';


export default function App() {
  return (
    <div className="container" style={styles.container}>
      <Logo></Logo> 
      <Frase></Frase>
      <Form></Form>
      
    </div>
  );
}
