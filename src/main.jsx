import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { DashboardLogin } from './pages/Dashboard/Login/index.jsx'


const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/dashboard">
    <Route index element={<DashboardLogin />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
)
