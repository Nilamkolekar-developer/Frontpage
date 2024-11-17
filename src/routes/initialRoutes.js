import React, { lazy } from 'react'

const Login = lazy(() => import('../views/login/screen'))
const Register = lazy(() => import('../views/register/screen')) // Add this line to import Register

const initialRoutes = [
  { path: '/', name: 'LogIn', element: Login, exact: true },
  { path: '/register', name: 'Register', element: Register, exact: true },

  {
    path: 'login',
    name: 'LogIn',
    element: Login,
  },
  {
    path: 'register',
    name: 'Register',
    element: Register,
  },
]

export default initialRoutes
