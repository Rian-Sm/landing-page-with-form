import React from 'react';
import { styles } from './styles';

export function Button ({...rest}:React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div style={styles.container}>
      <button style={{...styles.button, textTransform: 'uppercase',}}  {...rest}>Enviar</button>
    </div>
  )
}