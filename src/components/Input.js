import React from 'react';

function Input({ type = 'text', name, placeholder = '' }) {
  // const { type = 'text', name, placeholder = '' } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className='w-full border border-gray-400 rounded py-1 px-3'
    />
  );
}

export default Input;
