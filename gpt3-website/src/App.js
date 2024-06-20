import React from 'react'
import {CTA, Navbar} from './components'
import './app.css'
import { Footer, Blog, Possibility, Features, Whatgpt3, Header} from './containers'


const App = () => {
  return (
      <div className="app section-padding" >
            <Navbar/>
            <Header/>  
      <Whatgpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
      

  )
}

export default App
