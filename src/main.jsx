import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import JobSeekers from './components/JobSeekers/JobSeekers.jsx'
import Employers from './components/Employers/Employers.jsx'
 

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout />}>
      <Route index element={<App />} />
      <Route path='jobSeekers' element={<JobSeekers />} />
      <Route path='employers' element={<Employers />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
