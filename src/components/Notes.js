import React, { useState, useEffect, useReducer } from 'react'
import {v4 as uuid } from 'uuid'
import AddNoteForm from './AddNoteForm'
import NoteList from './NoteList'
import noteReducer from '../reducers/notes'
import NoteSlider from './NoteSlider'

const Notes = () => {
    // const [notes, setNotes] = useState([])
// alternately we can do --------->>>>>>>>>
    const [notes, dispatch] = useReducer(noteReducer,[]) // useReducer passes the state and dispatch here we have named the state
    const [sortByAscending, setSortBy ] = useState(false)

    const removeNote=(id)=>{
        const action = {
            type:'REMOVE_NOTE',
            id
        }
        dispatch(action)
        // setnotes(updates)
    }

    useEffect(()=>{
    const loadedNotes = JSON.parse(localStorage.getItem('notes'))
        if(loadedNotes){                                                
            // setNotes(loadedNotes)
            dispatch({type:'INIT_NOTES', notes:loadedNotes})
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])

 
   

    return (
        <div>
            <div>
                <h3>Add note</h3>
                <AddNoteForm dispatch={dispatch}/>
            </div>
    <h2>You have { notes.length} notes to display </h2>
    Select display mode<select>
    <option>Slider</option>
    <option>NoteList</option>

    </select>
    {/* <button onClick={()=>setSortBy(!sortByAscending)}>Sortby:{sortByAscending? 'descending':'ascending'}</button> */}
    <h2>{notes.length ===0 ? 'No notes to display' :`Your notes`}</h2>
            {/* YET TO INCORPORATE */}
            <NoteSlider notes={notes} slideNumber={1} removeNote={removeNote}/> 
            {/* <NoteList notes={notes} removeNote={removeNote}/> */}
        </div>

    )
}

export default Notes;