
//this line was for using json
//import useFetch from '../../hooks/useFetch'



//style
import './Recipe.css'

import React from 'react'
import {useParams} from 'react-router-dom'
import {useTheme} from '../../hooks/useTheme'
import { useEffect, useState } from 'react'
//firebase
import { projectFirestore } from '../../firebase/config'

export default function Recipe() {
    const{id}= useParams()
    const {mode} = useTheme()




     ///////////this three adde for using firebase///////////
    const[recipe,setRecipe] = useState(null)
    const[isPending,setIsPending] = useState(false)
    const[error,setError] = useState(false)

//update button
    const handleClick = ()=>{
      projectFirestore.collection('recipes').doc(id).update({ title: 'alaki'})
     //window.location.reload()
    }

    useEffect(()=>{
      setIsPending(true)
      const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc)=>{
        if (doc.exists){
          setIsPending(false)
          setRecipe(doc.data())
        }
        else{
          setIsPending(false)
          setError('Could not find the recipe')
        }


      })
      return () => unsub()

    },[id])
  
    ////////////////////////this lines are for json file/////////////////////////////
    //const url = 'http://localhost:3000/recipes/' + id
    //const {error, isPending, data: recipe} = useFetch(url)
    


  return (
    <div className={`recipe ${mode}`}>
    {error && <p className='error'>{error}</p>}
    {isPending && <p className='loading'>Loading...</p>}
    {recipe && 
    <>
    <h2 className='page-title'>{recipe.title}</h2>
    <p>Takes {recipe.cookingTime} to cook.</p>
    <ul>
        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
    </ul>
    <p className='method'>{recipe.method}</p>
    <button onClick={handleClick}>Update</button>
    </>
    }
    </div>
    
  )
}
