 
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import JobMatcher from './components/JobMatcher'
import CallToAction from './components/CallToAction'
import WhyChooseUs from './components/WhyChoose'
import TeamSection from './components/TeamMember'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer/Footer'
import Clients from './components/Clients'

function App() {


  return (
    <>
      <Home />
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

export default App
