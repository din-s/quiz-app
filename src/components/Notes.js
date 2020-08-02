import React, { useState, useEffect, useReducer } from 'react'
import AddNoteForm from './AddNoteForm'
import NoteList from './NoteList'
import noteReducer from '../reducers/notes'
import NoteSlider from './NoteSlider'
import NotesContext from '../context/notes-context'

const Notes = () => {
    // const [notes, setNotes] = useState([])
    // alternately we can do --------->>>>>>>>>
    const [notes, dispatch] = useReducer(noteReducer, []) // useReducer passes the state and dispatch here we have renamed the state
    const [sortByAscending, setSortBy] = useState(false)
    useEffect(() => {
        const loadedNotes = JSON.parse(localStorage.getItem('notes'))
        if (loadedNotes) {
            // setNotes(loadedNotes)
            dispatch({ type: 'INIT_NOTES', notes: loadedNotes })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    // To create display type 
    const [displayBy, setDisplayBy] = useState('slider')
    
    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <div>
                <h3>Add note</h3>
                <AddNoteForm />
            </div>
            <div>
                <form >
                <h4>Display by</h4>
                    <div className='Display-type'>
                    <label>
                        <input type='radio' value='slider' name='Display-type' onChange={(e)=>{setDisplayBy(e.target.value)} }/>
                        Slider
                    </label>
                    <label>
                        <input type='radio' value='list' name='Display-type' 
                        onChange={(e)=>{setDisplayBy(e.target.value)}} />
                        List
                    </label>
                    </div>
                </form>
            </div>
            
            <h2>{notes.length === 0 ? 'No notes to display' : `Your notes`}</h2>
            {displayBy==='slider'? <NoteSlider/> : <NoteList />} 
      
        </NotesContext.Provider>

    )
}

export default Notes;