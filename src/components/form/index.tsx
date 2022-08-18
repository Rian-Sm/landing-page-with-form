import React from 'react';
import { Input } from '../input';

export function Form (){
  return (
    <form>
      <Input id="nome" type="text" ></Input>
      <Input id="email" type="text"></Input>
      <Input id="contato" type="number"></Input>
    </form>
  )
}