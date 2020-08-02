import React, {useContext} from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

const NoteList =()=>{
    const { notes } = useContext(NotesContext)
    return notes.reverse().map((note)=>{
        return <Note 
         key={note.id}
         note={note} 
         />      
     }) 
}

export default NoteList