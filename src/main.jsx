import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import { CreateUser } from './pages/Dashboard/Users/Create/index.jsx'
import { EditUser } from './pages/Dashboard/Users/Edit/index.jsx'
import { Categories } from './pages/Dashboard/Categories/index.jsx'
import { CreateCategory } from './pages/Dashboard/Categories/Create/index.jsx'
import { EditCategory } from './pages/Dashboard/Categories/Edit/index.jsx'
import { Products } from './pages/Dashboard/Products/index.jsx'
import { CreateProduct } from './pages/Dashboard/Products/Create/index.jsx'
import { EditProduct } from './pages/Dashboard/Products/Edit/index.jsx'
import { Register } from './pages/Register/index.jsx'
import { Login } from './pages/Login/index.jsx'
import { Layout } from './pages/Login/components/Layout/index.jsx'
import { Home } from './pages/Home/index.jsx'
import { DashboardLogin } from './pages/Dashboard/Login/index.jsx'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Dashboard } from './pages/Dashboard/index.jsx'
import { Cart } from './pages/Cart/index.jsx'

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<DashboardLogin />} />
          <Route path="users">
            <Route path="create" element={<CreateUser />} />
            <Route path="edit/:id" element={<EditUser />} />
          </Route>
          <Route path="products">
            <Route index element={<Products />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path="create" element={<CreateCategory />} />
            <Route path="edit/:id" element={<EditCategory />} />
          </Route>
        </Route>
        {/* <Route path="/dashboard/login" element={<DashboardLogin />} /> */}
      </Route>
    </Route>
  )
)

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  </React.StrictMode>
)
