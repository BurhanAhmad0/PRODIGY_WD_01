import react from 'react'
import { useState } from 'react'

// Importing Components
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Testimonials from './components/Testimonials'
import About from './components/About'
import OurServices from './components/OurServices'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <HeroSection />
      <About />
      <OurServices />
      <Testimonials />
      <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <Footer />
    </>
  )
}

export default App
