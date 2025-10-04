import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Products from './components/Products'
import ShowAllProducts from './components/ShowAllProducts'
import AddProduct from './components/AddProduct'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='allproducts' element={<ShowAllProducts/>}></Route>
        <Route path='products' element={<Products/>}></Route>
        <Route path='addproduct' element={<AddProduct/>}></Route>
      </Routes>
    </>
  )
}

export default App
