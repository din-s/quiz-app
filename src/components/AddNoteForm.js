import React from 'react'
import { v4 as uuid } from 'uuid'
const AddNoteForm = ({dispatch}) => {

    const addNote = (e) => {
        e.preventDefault()
        const id=uuid()
        const title = e.target.title.value
        const createdAt = e.timeStamp

        const action={
            type:'ADD_NOTE',
            note:{id, title, createdAt}
        }

        dispatch(action)
        // setNotes([
        //     ...notes,
        //     {
        //         id,
        //         title,
        //         createdAt
        //     }
        // ])

        e.target.title.value= ''
        
    }
    return (
        <div>
            <form onSubmit={addNote}>
                <input type="text" id='title' />
                <button >Add Note</button>
            </form>
        </div>
        )

}

export default AddNoteForm