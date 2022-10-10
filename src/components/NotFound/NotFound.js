import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-between items-center w-8/12 mx-auto mt-32'>
            <div className='w-6/12'>
                <img src="https://img.freepik.com/free-vector/confused-business-character-making-important-decision_74855-20080.jpg?w=740&t=st=1665425048~exp=1665425648~hmac=87121d953c5933f9c548cfabf2a0376b9f08491a517e3e174bcafed5f5b83bb7" alt="" />
            </div>
            <div className='w-6/12 ml-12'>
                <h1 className='text-9xl font-bold text-red-600'>404</h1>
                <h3 className='text-5xl font-bold'>Something Went</h3>
                <h2 className='text-7xl font-bold'>Wrong!</h2>
                <Link to='/' className='bg-orange-500 hover:bg-orange-600 duration-500 rounded-lg py-3 w-full font-bold shadow-2xl mt-8 flex justify-center items-center text-white'>Back To Home Page</Link>
            </div>
        </div>
    );
};

export default NotFound;