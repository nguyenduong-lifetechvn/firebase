import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Common/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Navbar from './components/Common/Navbar'
import Posts from './components/Posts/Posts'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/post' element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
