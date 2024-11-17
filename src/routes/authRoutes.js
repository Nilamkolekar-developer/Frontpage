import React, { lazy } from 'react'
const Dashboard = lazy(() => import('../views/dashboard/screen'))
const authRoutes = [
  { path: '/admin', name: 'Dashboard', element: Dashboard, exact: true },
  { path: 'dashboard', name: 'Dashboard', element: Dashboard },
]

export default authRoutes