import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import JobSeekers from './components/JobSeekers/JobSeekers.jsx'
import Employers from './components/Employers/Employers.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Partner from './components/Partner/Partner.jsx'
import Profile from './components/Profile/Profile.jsx'
 

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='Home' element={<Home />} />
      <Route path='JobSeekers' element={<JobSeekers />} />
      <Route path='Employers' element={<Employers />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='Partner' element={<Partner />} />
      <Route path='profile' element={<Profile />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
