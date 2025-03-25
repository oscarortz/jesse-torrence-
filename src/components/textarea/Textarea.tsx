import { ChangeEvent } from 'react';
import './textarea.css'

type Props = {
  id: string | undefined;
  placeholder: string | undefined;
  label: string | undefined;
  handleChange: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string | undefined;
  value: string | undefined;
}

function Textarea({  id, placeholder, label, handleChange, name, value }: Props) {
  return (
    <div className='textarea-container'>
      <label className='label' htmlFor={id}>
        <span>{label}</span>
        <textarea  
          id={id} name={name} 
          placeholder={placeholder} 
          onChange={handleChange}
          value={value}
        ></textarea>
      </label>
    </div>
  )
}

export default Textarea