import React from 'react';
import { Switch , Route } from 'react-router-dom'
import Header from './Header'
import Contact from './Contact'
import About from './About'
import Error from './Error'
import QuestionSlider from './QuestionSlider'
const App = ()=>{
  return (
    <div>
      <Header/>
      <Switch>
        <Route  path='/' exact={true}><QuestionSlider/></Route>
        <Route path='/contact' ><Contact/></Route>
        <Route path='/about'><About/></Route>
        <Route ><Error/></Route>
      </Switch>
    </div>
  )
}

export default App;
