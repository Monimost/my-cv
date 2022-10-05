/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

// customization
import './nav.css'

//icons
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiSuitcaseFill } from 'react-icons/ri';
import { GiSkills } from 'react-icons/gi';


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineUser /></a>

            <a href="#school" onClick={() => setActiveNav('#school')} className={activeNav === '#school' ? 'active' : ''}><BiBook /></a>

            <a href="#prof" onClick={() => setActiveNav('#prof')} className={activeNav === '#prof' ? 'active' : ''}><RiSuitcaseFill /></a>

            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills /></a>
        </nav>
    )
}

export default Nav