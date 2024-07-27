import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cities from './components/first'

function App() {
  let cities = ["karachi", "Lahore", "Islamabad", "Peshawar", "Quetta" ]
  return (
    <>
    <h2>Some imprtant Cities of Pakistan</h2>
      <Cities prop = {cities}/>
    </>
  )
}

export default App
