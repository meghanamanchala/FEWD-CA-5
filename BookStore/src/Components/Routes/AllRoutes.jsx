// eslint-disable-next-line no-unused-vars
import React from 'react'
import  { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Books from '../Books/Books'
import RegistrationForm from '../../Registration/RegistrationForm'
import Info from '../Info/Info'

function AllRoutes() {
    const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
 <Routes> 
    <Route path='/' element={<>
        <Navbar setSearchQuery={setSearchQuery} />
        <Books searchQuery={searchQuery} />
    </>} /> 
    <Route path='/register' element={<div className="form"><RegistrationForm /></div>} />
<Route path='/info' element={<Info />} />
    
    </Routes>
    </div>
  )
}

export default AllRoutes