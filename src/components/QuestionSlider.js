import React, {useState} from 'react'
import Question from './Question'
import {questions }from '../fixtures/quiz'
const QuestionSlider = ()=>{
    const [ questionNumber , setQuestionNumber] = useState(0)
    const question = questions[questionNumber% questions.length ] 
    return (
        <div>
            <h5>QuestionNo {(questionNumber+1 )}/{ questions.length }</h5>
        
            <Question question={question.question} options={question.options} answer={question.answer}/>
            Controls :
            <button onClick={()=>setQuestionNumber(questionNumber -1 ) } disabled={questionNumber === 0}>Prev</button>
            <button onClick={()=>setQuestionNumber(questionNumber +1 ) }disabled={questionNumber === questions.length -1}>Next</button>
        </div>
    )
}
export default QuestionSlider