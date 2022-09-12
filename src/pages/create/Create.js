//this line is for json
//import useFetch from '../../hooks/useFetch'


//styles
import './Create.css'


//this line is for fire base
import { projectFirestore } from '../../firebase/config'


import { useState, useRef, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import React from 'react'



export default function Create() {
    const[title, setTitle]= useState('')
    const[method, setMethod]= useState('')
    const[cookingTime, setCookingTime]= useState('')
    const[newIngredient, setNewIngredient]= useState('')
    const[ingredients, setIngredients]= useState([])
    const ingredientInput = useRef(null)
    const history = useHistory()
    const[exam,setexam]= useState('')


    //this line is for json
    //const{postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST')


    const handleSubmit = async (e) => {
        
        e.preventDefault()
        setexam("yes")


        //////////////////////JSON///////////////
        //postData({title, ingredients, method, cookingTime: cookingTime + ' minutes'})

        ///////////////////////////////////////FIREBASE/////////////////////////
        const doc = {title, ingredients, method, cookingTime: cookingTime+' minutes'}
        try{
            //await will wait for that line to be finished
        await projectFirestore.collection('recipes').add(doc)
        history.push('/')
        }catch(err){
            console.log(err)

        } 
    }

    const handleAdd = (e) =>{
        e.preventDefault()
        const ing = newIngredient.trim()

        if(ing && !ingredients.includes(ing)){
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }

        setNewIngredient('')
        ingredientInput.current.focus()
    }


    //redirect the user to main page
    /////////////////////////JSON//////////
    /*useEffect(()=>{
        if(exam === "yes"){
       history.push('/')
        }
    },[data])*/


  return (
    <div className='create'>
        <h2 className='page-title'>Add a New Recipe</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Recipe title:</span>
                <input type="text" onChange={(e)=> setTitle(e.target.value)}
                value ={title}
                required/>
            </label>

            <label>
                <span>Recipe ingredients:</span>
                <div className='ingredients'>
            

                <input  type="text"
                onChange={(e)=> setNewIngredient(e.target.value)}
                value ={newIngredient}
                ref={ingredientInput}
                />

                <button onClick={handleAdd} className='btn'>add</button>
            </div>
            </label>
            <p>
                Current ingredients:{ingredients.map(i => <em key={i}>{i}, </em>)}
            </p>



            <label>
                <span>Recipe method:</span>
                <textarea  onChange={(e)=> setMethod(e.target.value)}
                value ={method}
                required/>
            </label>


            <label>
                <span>Recipe time (minutes):</span>
                <input type="number" min="0" onChange={(e)=> setCookingTime(e.target.value)}
                value ={cookingTime}
                required/>
            </label>


            <button className='btn'>submit</button>



        </form>
        </div>
  )
}
