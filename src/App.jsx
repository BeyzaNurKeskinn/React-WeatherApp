import { useState } from 'react'
import Weather from './component/weather.jsx';
import './component/style.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather />

    </>
  )
}

export default App
