import React,{ useState } from 'react'
import Note from './Note'


const NoteSlider=({notes, slideNumber,removeNote}) =>{

    const [slideToShow, setSlideToShow ] = useState(slideNumber || 0)
    console.log('**********noteslider:', notes)

    return ( 
        <div>
            <button disabled={slideToShow===1} onClick={()=>setSlideToShow(slideToShow - 1)}>Prev</button>
            <button disabled={slideToShow===1} onClick={()=>{setSlideToShow(1)}}>Reset</button>
            <button disabled={slideToShow===notes.length} onClick={()=>setSlideToShow(slideToShow + 1)}>Next</button>
            <p>{`Slide number : ${slideToShow} out of ${notes.length}`}</p>
            <div>
            {notes.length >= 0  && <Note indv={notes[slideToShow]} removeNote={removeNote} />}
            </div>
        </div>
    )
}

export default NoteSlider;