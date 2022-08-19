import React from 'react';
import { styles } from './styles'

interface IInputProps {
  id:string,
  text:string,
}

export function Select({id, text, ...rest}:IInputProps & React.InputHTMLAttributes<HTMLInputElement> ){
  return (
    <div style={styles.container}>   
      <label style={{ display:'flex', flexDirection: 'row'}} htmlFor={id}>
        <div style={styles.circleInput}>
          <input style={styles.input} id={id} {...rest} ></input>
        </div>
        <p style={{...styles.labelText, textAlign: 'center'}}>{text}</p>
      </label>
    </div>
  )
}