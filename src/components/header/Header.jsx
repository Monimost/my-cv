import React from 'react'
import './header.css'

//assets
import IMG from '../../assets/perfil_foto.png'

//data
import { infos, contact } from '../../data/data'

//icons

const Header = () => {
    return (
        <header id='#' className='header'>
            <div className="container header__container">
                <img src={IMG} alt="perfil" />
                <h1>{infos.name}</h1>
                <h2>{infos.nationality}</h2>
                <p>{infos.age}</p>
                <p>{contact.Address}</p>
                <p>{contact.phone}</p>
                <a href="mailto:mustappha.lahlali@gmail.com">{contact.email}</a>
            </div>
        </header>
    )
}

export default Header