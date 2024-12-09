import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Featured from "../components/featured"
import Latest from "../components/latest"
import Footer from "../components/footer"
import Blog from "../components/blog"

import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Latest/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default page