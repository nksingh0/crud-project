import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Getuser from './Axios/Getuser'
import Adduser from './Axios/Adduser'
import Updateuser from './Axios/Updateuser'
import PageNotFound from './Axios/PageNotFound'
let Appp = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Getuser/>} />
                <Route path="/edit" element={<Adduser/>} />
                <Route path="/update" element={<Updateuser/>} />
                <Route path="/update/:id" element={<Updateuser/>} />
                <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>      

  )
}
export default Appp