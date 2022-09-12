//styles
import './Searchbar.css'

import { useState } from 'react'
import {useHistory} from 'react-router-dom'
export default function Searchbar () {

 const [term,setTerm] = useState('');
 const history = useHistory()
 const result = []


 const handleSubmit = (e) =>{
     e.preventDefault()
     
     history.push(`/search?q=${term}`)
 }

  return (
    <div className="serachbar">
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Search:</label>
            <input
            type="text"
            id="serach"
            onChange={(e)=> setTerm(e.target.value)}
            required
            />
            </form>
        
        </div>
  )
}
