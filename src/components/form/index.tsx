import React from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { Select } from '../select';
import { styles } from './styles';

export function Form (){
  return (
    <div style={styles.container}>
      <form>
        <Input text='Nome' id="nome" type="text" maxLength={60}></Input>
        <Input text='E-mail' id="email" type="text"></Input>
        <Input text='WhatsApp' id="contato" type="tel"></Input>

        <Select 
          text='Eu autorizo um consultor da Smile entrar em contato via WhatsApp'
          id='authorizate'
          type='checkbox'>
        </Select>

        
      </form>
      <Button>
      </Button>
    </div>
  )
}