import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Redux/Profile.jsx/Login'
import Profile from './Redux/Profile.jsx/profile'
import './App.css'
// import { Counter } from './features/counter/Counter';
import Bank from './pages/Bank';
import DataMovie from "./Component/dataFetch"
// import DataMovie from "./Reducer/reducer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      {/* <Bank/> */}
      {/* <Profile />
      
      <Login/> */}
      <DataMovie/>
    </>
  )
}

export default App
