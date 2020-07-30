import React,{ useState ,useContext } from 'react'
import NotesContext from '../context/notes-context'
import Note from './Note'


const NoteSlider=() =>{

    const [slideToShow, setSlideToShow ] = useState(0)
    // console.log('**********noteslider:', notes)
    // after introducing context hooks, we have access to numerous things but here to use notes from context we need to have it like this:==>
    
    const {notes} = useContext(NotesContext)
    return ( 
        <div>
            {notes.length >0 && <div>
                <button disabled={slideToShow===0} onClick={()=>{setSlideToShow(0)}}>Reset</button>
            <button disabled={slideToShow===0} onClick={()=>setSlideToShow(slideToShow - 1)}>Prev</button>
            <button disabled={slideToShow===notes.length-1} onClick={()=>setSlideToShow(slideToShow + 1)}>Next</button>
            {/* {console.log(notes[slideToShow])} */}
            
                <p>{`Slide number : ${slideToShow+1} out of ${notes.length}`}</p>
                <Note note={notes[slideToShow]}/>
            </div>}
        </div>
    )
}

export default NoteSlider;