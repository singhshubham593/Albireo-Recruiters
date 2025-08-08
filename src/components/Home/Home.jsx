import React from 'react'
import HeroSection from './HeroSection'
 
import JobMatcher from './JobMatcher'
import CallToAction from './CallToAction'
import WhyChooseUs from './WhyChoose'
import TeamSection from './TeamMember'
import Review from './Review'
import Clients from './Clients'
import Contact from './Contact'
import { Link } from 'react-router-dom'
 


const Home = () => {
  return (
    <Link to="/Home" className="home-link">
      <HeroSection />
      <JobMatcher />
      <CallToAction />
      <WhyChooseUs />
      <TeamSection />
      <Review />
      <Clients />
      <Contact />
    </Link>
  )
}

export default Home
