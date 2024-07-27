// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import About from "./components/About"
import Navbar from "./components/Nav"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar title="Dark Mode With Hooks" abouttext="About"/>
      <About/>
    </>
  )
}

export default App
