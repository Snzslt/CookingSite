//styles
import './ThemeSelector.css'

import { useTheme } from '../../hooks/useTheme'
import React from 'react'
import modeIcon from '../../assets/mode-icon.svg'


const themeColors = ['#bf6c50','#c6d44a','#50bfaf']

export default function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme()
    const toggleMode = () =>{
      changeMode(mode==='dark'? 'light':'dark')

    }
    
  return (
    <div className='theme-selector'>
        <div className = 'mode-toggle'>
            <img 
            onClick={toggleMode}
            src={modeIcon}
            style={{filter:mode==='dark'?'invert(100%)':'invert(20%)'}}/>
            </div>
        <div className='theme-buttons'>
            {themeColors.map(color => (
                <div
                 key={color} 
                onClick={()=> changeColor(color)}
                style={{background: color}}
                />
            ))}


        </div>
        </div>
  )
}
