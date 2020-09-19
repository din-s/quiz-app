import React,{ useContext } from 'react'
import { AppContext } from '../context/app'
const Component =()=>{

    const {setToShow} = useContext(AppContext)
    console.log('set to shw ', useContext(AppContext))
    return (
        <div>
            <button onClick={()=>setToShow('quiz')}>Quiz</button>
            <button onClick={()=>setToShow('note')}>Note</button>
        </div>
    )
}

export default Component