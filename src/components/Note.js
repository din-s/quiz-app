import edit_pen from '../images/edit_pen.png'
import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'
import EditNote from './EditNote'
const Note = ({ note }) => {

    const { dispatch } = useContext( NotesContext )

    const removeNote=(id)=>{
        const action ={
            type:'REMOVE_NOTE',
            id
        }
        dispatch(action)
    }
    return (
        <div>
            <h2>Title:  {note.title}  </h2>
            <p> createdAt : {note.createdAt}</p>
            <button onClick={() => removeNote(note.id)}> X</button>
            <button onClick={() => <EditNote title={note.title} />} >Edit </button>
        </div>
    )
}

export default Note