import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'


import React from 'react'

export const useTheme = () => {
    const context = useContext (ThemeContext)


    //this will be used when we didn't use context for the whole application
    if(context===  undefined){
        throw new Error("useTheme() must be used inside a ThemeProvider")
    }
    return context
}
