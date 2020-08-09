import React, { useContext } from 'react'
import { questions } from '../fixtures/quiz'
// import NotesContext from '../context/notes-context'
// import EditNote from './EditNote'
const Question = ( {question, options ,answer} ) => {
    const check = (e)=>{
        if (answer === e.target.textContent){
            alert('Well Done')
        }else{
            alert('Wrong Answer \nWork Hard')
        }
    }
    return (
        <div>
            <h4>Q:{question}  </h4>
            <p>Choose Any One: </p>
            <ol type={'a'}>
            {options.map((option)=>{
                return <li key={option}><button onClick={(e)=>check(e)} >{option}</button></li>
            })}
            </ol>
            
        </div>
    )
}

export default Question