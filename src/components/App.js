import React , {useState} from 'react';
import { Switch , Route } from 'react-router-dom'
import Header from './Header'
import Contact from './Contact'
import About from './About'
import Error from './Error'
import QuestionSlider from './QuestionSlider'
import Question from './Question'
import Note from './Note'
import {quiz} from '../fixtures/quiz'
import {notes} from '../fixtures/notes'
import {AppContext} from '../context/app'
import AppSelection from './AppSelection'

const App = ()=>{
  const [ toShow, setToShow] = useState('quiz')

  let data;
  if(toShow === 'quiz'){
    data = quiz
  }else{
    data = notes
  }

  const Slider = toShow ==='quiz' ? QuestionSlider(Question) : QuestionSlider(Note)

  return (
    <AppContext.Provider value={{toShow, setToShow,data}}>
      <Header/>
      <AppSelection />
      <Switch>
        <Route  path='/' exact={true}><Slider data={data}/></Route> 
        <Route path='/contact' ><Contact/></Route>
        <Route path='/about'><About/></Route>
        <Route ><Error/></Route>
      </Switch>
    </AppContext.Provider>
  )
}

export default App;
