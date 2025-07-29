import React from 'react'
import HeroSection from './HeroSection'
import JobMatcher from './JobMatcher'
import CallToAction from './CallToAction'
import WhyChooseUs from './WhyChoose'
import TeamSection from './TeamMember'
import Review from './Review'
import Clients from './Clients'
import Contact from './Contact'


const Home = () => {
  return (
    <>
      <HeroSection />
      <JobMatcher />
      <CallToAction />
      <WhyChooseUs />
      <TeamSection />
      <Review />
      <Clients />
      <Contact />
    </>
  )
}

export default Home
