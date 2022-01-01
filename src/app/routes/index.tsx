import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Application from '../../app/main/App'

export default function RouterApplication() {
  return (
   <Routes>
    <Route path='/' element={<Application />}/>
    <Route path='*' element={<Application />}/>
   </Routes>
  )
}