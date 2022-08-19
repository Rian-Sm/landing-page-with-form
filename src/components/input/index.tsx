import React from 'react';
import { styles } from './styles'

interface IInputProps {
  id:string,
  text:string,
}

export function Input({id, text, ...rest}:IInputProps & React.InputHTMLAttributes<HTMLInputElement> ){
  return (
    <div style={styles.container}>
      <label htmlFor={id}>
        <p style={{...styles.labelText, textAlign: 'center'}}>{text}</p>
      </label>
      <input style={styles.input} id={id} {...rest} ></input>
    </div>
  )
}