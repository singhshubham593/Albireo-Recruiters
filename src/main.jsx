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
import Login from './components/Login/Login.jsx'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {store} from "./store/jobStore.js"
import {Provider} from "react-redux";
import ApplyFrom from './components/JobSeekers/ApplyFrom.jsx'

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='Home' element={<Home />} />
      <Route path='JobSeekers' element={<JobSeekers />} />
       {/* Apply page nested inside JobSeekers */}
      <Route path="/JobSeekers/apply/:jobId" element={<ApplyFrom />} />
      <Route path='Employers' element={<Employers />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='Partner' element={<Partner />} />
      <Route path='Profile' element={<Profile />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
