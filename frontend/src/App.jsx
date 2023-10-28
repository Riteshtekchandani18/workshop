import React from 'react'
import Navbar from './components/navbar'
import Header from './components/Header'
import './App.css'
import Banner from './components/Banner'
import About from './components/About'
import Cards from './components/Cards'
import Sigup from './components/Sigup'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
   <Navbar />
   <Header />
   <Banner />
   <About />
   <Cards />
   <Sigup />
   <Footer />
   </div>
   
  )
}

export default App
