import React from 'react'
import './style.css'
import Home from './Home'
import Computer from './Computer'
import Electronics from './Electronics'
import Civil from './Civil'
import Page404 from './Page404'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    
    <div>
        <div className='header'>
            <div className='logo'>
            <h1>Broadway Infosys</h1>
            </div>
            <div className='nav'>
              <Link to='/'>Home</Link>
                <Link to='/computer'>Computer</Link>
                <Link to='/electronics'>Electronics</Link>
                <Link to='/civil'>Civil</Link>
            </div>
        </div>

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/computer' element={<Computer/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/civil' element={<Civil/>}/>
        <Route path='/*' element={<Page404/>}/>
        </Routes>
        
    </div>
    
  )
}

export default App