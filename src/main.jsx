import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home.jsx'
import { User } from './pages/User.jsx'
import { Settings } from './pages/Settings.jsx'
import { WorkInProgress } from './pages/WorkInProgress.jsx'
import { App } from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/user',
        element: <User />
      },

    ]
  },
  {
    path: '*',
    element: <WorkInProgress />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
