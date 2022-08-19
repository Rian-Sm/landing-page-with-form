import React from 'react';

export function Button ({...rest}:React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div>
      <button {...rest}>Enviar</button>
    </div>
  )
}