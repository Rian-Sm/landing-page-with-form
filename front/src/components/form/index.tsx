import React, { useCallback, useState } from 'react';
import { salvarDadosCliente } from '../../service';
import { Button } from '../button';
import { Input } from '../input';
import { Checkbox } from '../select';
import { styles } from './styles';

export interface IForm {
  name:string,
  mail:string,
  phone:string,
  notification:boolean,
}

const limitations: { [key: string]: number } = {
  phone: 12,
  name: 60,
  mail:100
}

export function Form (){
  const [form, setForm] = useState<IForm>({name:'',mail:'',phone:'',notification:false});
  
  const handleSubmit = useCallback((event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const {mail, name, phone} = form;
    console.log(mail, name, phone.replaceAll(/\D/g, ''));


    if (!mail || !name || !phone || !(phone.replaceAll(/\D/g, '').length===12)) {
      console.log('ERRO');
      return; 
    }
    salvarDadosCliente({...form, phone:phone.replaceAll(/\D/g, '')});

  },[form]);

  const handleInput = useCallback(({currentTarget:{value, id}}:React.ChangeEvent<HTMLInputElement>)=>{
   
    let newValue = value;
    if (id == 'nome'){
      newValue = value.replaceAll(/[^A-Za-z\sÀ-ü]/g, '');
      if (
        newValue.length > limitations[id] && !(newValue.length>form.name.length)
      ) return
      setForm({...form, name:newValue});
    }

    if (id == 'mail'){
      //newValue = value.replaceAll(/[\u00AA-ÿ]|[!#$%¨&*=+/()`´~^?;:'",]/g, '');
      newValue = value.replaceAll(/[^a-zA-Z0-9@_.]/g,'')     
      if (
        newValue.length > limitations[id] && !(newValue.length>form.mail.length)
      ) return

      setForm({...form, mail:newValue});
    }
  },[form])

  const handlePhone = useCallback(({currentTarget:{value}}:React.ChangeEvent<HTMLInputElement>)=>{
    const newValue = value.replaceAll(/\D/g, '')
    if (newValue.length > limitations.phone  && !(newValue.length>form.phone.length)) return;
    setForm({...form, phone:newValue.replace(/(\d{2})(\d{1})(\d{4})(\d)/, '($1) $2 $3-$4')});
  },[form])

  

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <Input
          required
          value={form.name}
          onChange={handleInput}
          text='Nome'
          id="nome"
          type="text"
          maxLength={60}>
        </Input>
        <Input
          required
          value={form.mail}
          onChange={handleInput}
          text='E-mail'
          id="mail"
          type="text"
        >

        </Input>
        <Input
          required
          value={form.phone}
          onChange={handlePhone}
          text='WhatsApp'
          id="contato"
          type="tel">

        </Input>

        <Checkbox 
          checked={form.notification}
          onChange={
            ({currentTarget:{checked}})=>setForm({...form, notification:checked})
          }
          text='Eu autorizo um consultor da Smile entrar em contato via WhatsApp'
          id='authorizate'
          type='checkbox'>
        </Checkbox>

        <Button />
      </form>
      
    </div>
  )
}