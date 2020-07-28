import edit_pen from '../images/edit_pen.png'
import React from 'react'
const Note = ({indv, removeNote})=>{
    console.log('indv:',indv)
    return(
        <div>
            <h2>Title:  {indv.title}  </h2>
            <p> createdAt : {indv.createdAt}</p>
            <button onClick={()=>removeNote(indv.id)}> X</button>
            <button style={{backgroundImage:`url(${edit_pen})`}}></button>
            <a href='#'><img src={edit_pen} alt={'edit'} style={{width:30,height:20}}/></a>

        </div>
    )
}

export default Note