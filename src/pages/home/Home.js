import useFetch  from '../../hooks/useFetch'
import './Home.css'
import React from 'react'
import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'

//components
import RecipeList from '../Components/RecipeList'



export default function Home() {


  ///////////this three adde for using firebase///////////
  const[data,setData] = useState(null)
  const[isPending,setIsPending] = useState(false)
  const[error,setError] = useState(false)



  //this function added for working with firebase
  useEffect(()=>{
    setIsPending(true)
    //projectFirestore.collection('recipes').get().then((snapshot)=>{
    /////////////////////////////////realtime collection data
      const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot)=>{
      
      if(snapshot.empty){
        setError('No recipes to load')
        setIsPending(false)
        //window.location.reload()
      }
      else{
        let results=[]
        snapshot.docs.forEach(doc => {
          results.push({id:doc.id, ...doc.data()})
        })
        setData(results)
        setIsPending(false)
      }
    },(err)=>{
      setError(err.message)
      setIsPending(false)
    })
    //it doesn't try to update when we are in another page
    return () => unsub()

  },[])





  //this line works with json file
  //const{data, isPending, error} = useFetch('http://localhost:3000/recipes')


  return (
    <div className='home'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {data && <RecipeList recipes={data}/>}
        </div>
  )
}
