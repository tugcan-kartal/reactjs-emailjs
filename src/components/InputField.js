import React from 'react'

function InputField(props) {

    const {handleChange,label,name,type,value}=props;

  return (
    <div className='mb-5'>
        <label className='text-gray-500 text-sm' htmlFor={name}>{label}</label>
        <input onChange={handleChange} className='border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2' type={type} value={value} name={name} required/>
    </div>
  )
}

export default InputField