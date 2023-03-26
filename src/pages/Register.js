import React from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input';
import Button from 'components/Button';

function Register() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='border border-gray-400 rounded-lg shadow-lg shadow-gray-400 max-w-xl w-1/3 h-1/3 flex flex-col justify-center items-center gap-y-4 mx-auto py-4 px-5'>
        <h1 className='text-lg text-gray-700 font-semibold text-center'>
          Register to Kanban
        </h1>
        <Input type='text' name='email' placeholder='Enter Email' />
        <Input type='password' name='password' placeholder='Enter Password' />
        <Button text='Register' color='blue' />
        <Link to='/login' className='text-blue-600'>
          Already have an account? Log In
        </Link>
      </div>
    </div>
  );
}

export default Register;
