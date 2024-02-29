import React from 'react'
import Header from '../pages/Header'
import '../app/globals.css'
import Header1 from '@/pages/Header1'
import Home from '../pages/Home'

const page = () => {
  return (
    <div> <Header/>
    <Header1/>
    <Home/>
    </div>
  )
}

export default page