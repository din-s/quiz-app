import React from 'react'
import Note from './Note'

const NoteList =({notes})=>{
    return notes.reverse().map((note)=>{
        return <Note 
         key={note.id}
         note={note} 
         />      
     }) 
}

export default NoteList