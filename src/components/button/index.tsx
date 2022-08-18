import React from 'react';


export function Form ({...rest}:React.ButtonHTMLAttributes<HTMLButtonElement>){
  return (
    <div>
        <button {...rest}>Enviar</button>
    </div>
  )
}