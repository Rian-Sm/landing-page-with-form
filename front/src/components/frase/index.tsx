import React from 'react';
import { styles } from './styles';

export function Frase(){
  return (
    <div style={styles.container}>
      <p style={{ ...styles.header , textTransform: 'uppercase',  textAlign: 'center' }}>Crie seu E-Commerce</p>
      <p style={{ ...styles.text  , textAlign: 'center' }}>Chegou a hora de criar seu e-commerce com especialistas do SmileShop</p>
      <p style={{ ...styles.textSpan, textAlign: 'center'}}>Preencha o formulário abaixo que um consultor entrará em contato!</p>
    </div>
  )
}
