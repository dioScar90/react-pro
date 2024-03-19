import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import { DashboardLogin } from './pages/Dashboard/Login/index.jsx'
import { Layout } from './pages/Dashboard/Login/components/Layout/index.jsx'
import { Users } from './pages/Dashboard/Users/index.jsx'
import { CreateUser } from './pages/Dashboard/Users/Create/index.jsx'
import { EditUser } from './pages/Dashboard/Users/Edit/index.jsx'
import { Categories } from './pages/Dashboard/Categories/index.jsx'
import { CreateCategory } from './pages/Dashboard/Categories/Create/index.jsx'
import { EditCategory } from './pages/Dashboard/Categories/Edit/index.jsx'
import { Products } from './pages/Dashboard/Products/index.jsx'
import { CreateProduct } from './pages/Dashboard/Products/Create/index.jsx'
import { EditProduct } from './pages/Dashboard/Products/Edit/index.jsx'

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      
      <Route path="/" element={<Layout />} />

      <Route path="/dashboard" element={<Layout />}>

        <Route path="users">
          <Route index element={<Users />} />
          <Route path="create" element={<CreateUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Route>
        
        <Route path="categories">
          <Route index element={<Categories />} />
          <Route path="create" element={<CreateCategory />} />
          <Route path="edit/:id" element={<EditCategory />} />
        </Route>
        
        <Route path="products">
          <Route index element={<Products />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Route>

      </Route>

      <Route path="/dashboard/login" element={<DashboardLogin />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
)
