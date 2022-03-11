import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Contact from './Contact'
import Header from './Header'
import Student from './Student'
import Home from './Home'


const App = () => {
  return (
    <> 
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/students' element={<Student /> } />
                <Route path='/students-list' element={<Student /> } />
                <Route path='/students-list/:id' element={<Student /> } />
                <Route path='/contact' element={<Contact /> } /> 
            </Routes>
        </Router>
    </>
  )
}




export default App