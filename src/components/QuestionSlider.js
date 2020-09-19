import React, {useContext} from 'react'
import { AppContext } from '../context/app'

/**
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
 * 
 */


const QuestionSlider = (WrappedComponent) => {
    console.log('inside', useContext(AppContext))
    // const {setToShow} = useContext(AppContext)
    // console.log('content ', setToShow)
    // const content = {
    //     title:'Ti1',
    //     description:'Somethng',
    //     createdAt:'No tie '
    // }
    return (props) => {
        const content = props.data[3]
        return <div>
                <WrappedComponent {...content}/>
            </div>
    }
}
export default QuestionSlider