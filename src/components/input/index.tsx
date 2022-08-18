import React from 'react';
//import { styles } from './styles'

export function Input({id, ...rest}:React.InputHTMLAttributes<HTMLInputElement>){
  return (
    <div>
      <label htmlFor={id}></label>
      <input id={id} {...rest} ></input>
    </div>
  )
}