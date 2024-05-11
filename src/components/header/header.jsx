import React from 'react'
import './header.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
         <ul>
            <li className='logo'>IA-PiC</li>
            <li className='search'>
                <input type="text" name="" id="" placeholder='Que recherchez vous ?' />
                <img src="./assets/icons/icon-search.png" alt="icon" />
            </li>
            <li>Aide </li>
            <li>Devenir contributeur </li>
            <motion.li className='btn btn-login'animate={{}}>
              <Link to="/inscription" className='Link'>Se connecter</Link>
            </motion.li>
         </ul>
    </header>
  )
}

export default Header
