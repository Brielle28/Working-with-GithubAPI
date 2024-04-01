import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Displayform from './components/Displayform'
import Toggle from './components/Toggle'
import Textarea from './components/Textarea'
import Todo from './components/Todo'
import Colors from './components/Colors';
import Search from './components/Search';
import UserArray from './components/UserArray';


const routing = createBrowserRouter([
  {
      path: '/', element: <Displayform/>
  },
  {
    path:'/toggle', element: <Toggle/>
  },
  {
    path:'/textarea', element: <Textarea/>
  },
  {
    path:'/todo', element: <Todo/>
  },
  {
    path:'/color', element: <Colors/>
  },
  {
    path:'/search', element: <Search/>
  },
  {
    path:'/gitusers', element: <UserArray/>
  },
])
function App() {

  return (
    <>
    <RouterProvider router={routing}/>
    </>
  )
}

export default App
