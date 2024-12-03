import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import TableData from './components/TableData'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/table' element={<TableData/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default App