import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import HomeLayout from './layout/HomeLayout';
import Layout from './layout/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Order from './pages/Order';
import Pricing from './pages/Pricing';
import './style/style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
          <Route path='/' element={<HomeLayout/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
          <Route path='/' element={<Layout/>}>
            <Route path='/about' element={<About/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/order' element={<Order/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
