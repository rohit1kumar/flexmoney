import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Home from './Home'
import Login from './Login'
import Register from './Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App