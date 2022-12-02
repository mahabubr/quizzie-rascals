import { faBars, faBrain, faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);

    const links = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Topics', path: '/topics' },
        { id: 3, name: 'Statistics', path: '/statistics' },
        { id: 4, name: 'Blog', path: '/blog' },
    ]

    return (
        <div className='flex justify-around items-center sticky top-0 z-10 bg-zinc-700 p-7'>
            <div className='flex justify-center items-center'>
                <FontAwesomeIcon className='text-sky-400 mr-4 text-4xl' icon={faBrain} />
                <Link to='/' className='text-amber-400 font-bold text-3xl'>Quizzie Rascals</Link>
            </div>
            <div className="h-6 w-6 md:hidden" onClick={() => setOpen(!open)}>
                {
                    open
                        ?
                        <FontAwesomeIcon className='text-white text-xl font-semibold' icon={faCross} />
                        :
                        <FontAwesomeIcon className='text-white text-xl font-semibold' icon={faBars} />
                }
            </div>
            <ul className={`md:flex justify-center absolute md:static duration-500 ease-out ${open ? 'top-16 bg-zinc-800 p-6' : 'top-[-120px]'}`}>
                {
                    links.map(link => <NavLink end key={link.id} className={({ isActive }) => isActive ? 'text-white mr-8 text-xl font-semibold border-l-4 border-rose-500' : 'text-white mr-8 text-xl font-semibold'} to={link.path}>{link.name}</NavLink>)
                }
            </ul>
        </div>
    );
};

export default Header;