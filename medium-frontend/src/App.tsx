import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path= '/blogs' element = {<Blogs></Blogs>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
