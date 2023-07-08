import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index  element={<Home/>}/>
        <Route path="About" element={<About />}/>
        <Route path="Portfolio" element={<Portfolio />}/>
        <Route path="Login" element={<Login />}/>
        <Route path="Contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
