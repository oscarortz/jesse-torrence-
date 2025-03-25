import React from 'react'
import './input.css'

type Props = {
  text: string;
  labelId: string;
  inputType: React.HTMLInputTypeAttribute;
  placeHolder: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void | null;
  name: string;
  value: string | undefined;
  isRequired?: boolean;
}

function Input({ text, inputType, labelId, placeHolder, handleChange, name, value, isRequired }: Props) {
  return (
    <div className='input-container'>
      <label htmlFor={labelId} className='label'>
        <span>{text}</span><input className='input' required={isRequired} name={name} id={labelId} type={inputType}  placeholder={placeHolder} onChange={(evt) => handleChange(evt)} value={value}/>
      </label>
    </div>
  )
}

export default Input