import React, { useCallback, useState } from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { Checkbox } from '../select';
import { styles } from './styles';

interface IForm {
  name:string,
  mail:string,
  phone:string,
  authorization:boolean,
}

const limitations: { [key: string]: number } = {
  phone: 12,
  name: 60,
  mail:100
}

export function Form (){
  const [form, setForm] = useState<IForm>({name:'',mail:'',phone:'',authorization:false});
  
  const handleSubmit = useCallback((event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const {mail, name, phone} = form;
    if (!mail || !name || !phone) return; 
  },[form]);

  const handleInput = useCallback(({currentTarget:{value, id}}:React.ChangeEvent<HTMLInputElement>)=>{
   
    let newValue = value;
    if (id == 'nome'){
      newValue = value.replaceAll(/\d|[!@#$%¨&*-_=+/()`´~^?;:'",.]/g, '');
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
          checked={form.authorization}
          onChange={
            ({currentTarget:{checked}})=>setForm({...form, authorization:checked})
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