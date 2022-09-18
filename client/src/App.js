import React, { useEffect } from 'react'
import 'materialize-css'
import {useRoutes} from './routes'
import { Link, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, getMe, logout, checkToken } from './redux/features/auth/authSlice'
import { Navbar } from './components/Navbar'

function App() {
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe)
  }, [dispatch])



  return (
    <div className="container mx-auto">
      <Navbar/>
      {useRoutes()}
      <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default App