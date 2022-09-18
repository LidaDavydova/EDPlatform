import React, { useEffect, useState } from 'react'
import 'materialize-css'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, getMe, logout } from '../redux/features/auth/authSlice'

export const Navbar = () => {
  const dispatch = useDispatch()
  //let isAut = true
  var isAuth = window.localStorage.getItem('token')
  //const [isAuth, updatelogoutState] = useState(window.localStorage.getItem('token'))
  console.log(isAuth)

  function logoutHandler() {
    dispatch(logout())
    window.localStorage.removeItem('token')
    isAuth = window.localStorage.getItem('token')
    window.location.reload()
    console.log(isAuth)
    toast('You are logged out')
    return isAuth
  }


  useEffect(() => {
    dispatch(getMe)
  }, [dispatch])

  const activeStyle = {
    color: 'yellow'
  }


  return (
    <div>
        {isAuth && (
            <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow"/>
                    <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow"/>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
          
                      <div className="text-red-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lr font-medium">
                        <NavLink
                            to={'/'}
                            href='/'
                            style={({isActive}) =>
                              isActive ? activeStyle : undefined  
                            }
                        >
                            Главная
                        </NavLink>
                      </div>

                      <div className="text-red-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lr font-medium">
                        <NavLink
                            to={'/posts'}
                            href='/'
                            style={({isActive}) =>
                            isActive ? activeStyle : undefined  
                            }
                        >
                            Загрузить пост
                        </NavLink>
                      </div>
          
                      <div className="text-red-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lr font-medium">
                        <NavLink
                            to={'/create'}
                            href='/'
                            style={({isActive}) =>
                            isActive ? activeStyle : undefined  
                            }
                        >
                            Create
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </button>
          
                  <div className="ml-3 relative">
                    <div>
                      <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          
            <div className="sm:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
          
                <div className="text-red-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    <NavLink
                        to={'/'}
                        href='/'
                        style={({isActive}) =>
                        isActive ? activeStyle : undefined  
                        }
                    >
                        Главная
                    </NavLink>
                </div>
          
                <div className="text-red-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    <NavLink
                        to={'/create'}
                        href='/'
                        style={({isActive}) =>
                        isActive ? activeStyle : undefined  
                        }
                    >
                        Create
                    </NavLink>
                </div>
              </div>
            </div>
          </nav>

        )}


        {(isAuth && isAuth!=null) ? (
          <button onClick={() => {logoutHandler()}}>LogOut</button>
        ) : (
          <Link to={'/login'}>LogIn</Link>
        )}
    </div>
  )
}
