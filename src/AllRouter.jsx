import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Description from './Pages/Description'

function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/product' element={<Product/>} ></Route>
        <Route path='/description/:id' element={<Description/>} ></Route>

      </Routes>
    </div>
  )
}

export default AllRouter
