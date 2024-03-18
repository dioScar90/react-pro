import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { DashboardLogin } from './pages/Dashboard/Login/index.jsx'
import { Layout } from './pages/Dashboard/Login/components/Layout/index.jsx'
import { Dashboard } from './pages/Dashboard/index.jsx'


const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/dashboard" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="products" element={null} />
      <Route path="categories" element={null} />
    </Route>
    <Route path="/dashboard/login" element={<DashboardLogin />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
)
