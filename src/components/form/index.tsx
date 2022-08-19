import React from 'react';
import { Button } from '../button';
import { Input } from '../input';

export function Form (){
  return (
    <div>
      <form>
        <Input text='Nome' id="nome" type="text" ></Input>
        <Input text='E-mail' id="email" type="text"></Input>
        <Input text='WhatsApp' id="contato" type="tel"></Input> 

        <Input 
          text='Eu autorizo um consultor da Smile entrar em contato via WhatsApp'
          id="authorizate"
          type="checkbox">
        </Input>

        
      </form>
      <Button>
      </Button>
    </div>
  )
}