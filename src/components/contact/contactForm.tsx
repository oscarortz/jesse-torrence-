import { Contact, FormData } from '@/types/data.type'
import React, { ChangeEvent, useState } from 'react'
import Input from '../input/Input';
import './contactForm.css'
import Textarea from '../textarea/Textarea';

type Props = {
  contact: Contact | undefined;
  isMobile: boolean;
}

type Evt = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;

const initialData = {
  full_name: '',
  email: '',
  website: '',
  share_your_message: ''
}

function ContactForm({ contact, isMobile }: Props) {
  const [data, setData] = useState(initialData)

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setData(initialData);
  }

  const handleChange = (evt: Evt) => {
    const { name, value } = evt?.target;
    setData((prev) => ({...prev, [name]: value}))
  }

  return (
    <div className={`${isMobile ? 'contact-container-movil' : 'contact-container'}`}>
      {!isMobile && (
        <div className='form-header-container'>
          <h2>{contact?.title}</h2>
          <h3>{contact?.subtitle}</h3>
        </div>
      )}
      <form id='contact-form' onSubmit={handleSubmit} className={isMobile ? 'form-container-movil' : 'form-container'}>
        <div className={`${isMobile ? 'inputs-container-movil' : 'inputs-container'}`}>
          {contact && contact?.inputs?.map((input, index) => (
            <Input 
              key={index}
              name={input?.id} 
              inputType={input?.type} 
              labelId={input?.id} 
              text={input?.label} 
              placeHolder={input?.placeholder} 
              handleChange={handleChange} 
              value={data[input.id as keyof FormData] || ''}
              isRequired={input?.isRequired}
            />
          ))}
        </div>
        <div className={`${isMobile ? 'textarea-wrapper-movil' : 'textarea-wrapper'}`}>
          <Textarea 
            id={contact?.textarea?.label} 
            name={contact?.textarea?.id}
            label={contact?.textarea?.label} 
            placeholder={contact?.textarea?.placeholder} 
            handleChange={handleChange}
            value={data?.[contact?.textarea?.id as keyof FormData] || ''}
          />
          <button className={isMobile ? 'button-movil' : 'button'} type='submit' form='contact-form'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm