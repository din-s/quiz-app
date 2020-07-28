import React from 'react'
import Note from './Note'

const NoteList =({notes, removeNote})=>{
    return notes.reverse().map((note)=>{
        return <Note 
         key={note.id}
         id={note.id}
         title={note.title}
         createdAt={note.createdAt} 
         removeNote={removeNote}
         />
             
     }) 
}

export default NoteList