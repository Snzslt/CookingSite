//styles
import './Navbar.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'


//components
import Searchbar from './Searchbar'





export default function Navbar() {

    const {color, changeColor} = useTheme()
  return (
    <div className='navbar' style={{background: color}}>
        <nav>
            <Link to="/" className='brand'>
            <h1>Cooking Sun</h1>
            </Link>
            <Searchbar/>
            <Link to="/Create">
            Create Recipe
            </Link>

        </nav>
        </div>
  )
}
