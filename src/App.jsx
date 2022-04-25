import React from 'react'

import CreatePosts from './Components/Posts/CreatePosts'
import DeletePosts from './Components/Posts/DeletePosts'
import EditPosts from './Components/Posts/EditPosts'
import Posts from './Components/Posts/Posts'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route path='/create-post' element={<CreatePosts/>}/>
        <Route path='/delete-post/:id' element={<DeletePosts/>}/>
        <Route path='/edit-post/:id' element={<EditPosts/>}/>
        
      </Routes>
    </Router>
  )
}

export default App