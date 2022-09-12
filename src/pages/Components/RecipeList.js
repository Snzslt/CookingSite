import './RecipeList.css'
import { Link } from 'react-router-dom'

import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import Trashcan from '../../assets/delete-icon.svg'
import { projectFirestore } from '../../firebase/config'
import {useHistory} from 'react-router-dom'

export default function RecipeList({ recipes }) {

  const {mode} =useTheme()
  const history = useHistory()

    if(recipes.length ===0 ){
        return <div className='error'> No recipes to load...</div>
    }
    const handleClick =  (id)=>{
     projectFirestore.collection('recipes').doc(id).delete()
    //window.location.reload()

    }
  return (
    <div className='recipe-list'>
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                <img
                className='delete'
                src={Trashcan}
                onClick={()=> handleClick(recipe.id)}/>
                
                </div>
        ))}
        </div>
  )
}
