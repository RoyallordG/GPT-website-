import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Header = () => {
  return (
    <div className='section-margin-bottom' >
    <div className='home '>
      <div className="home-text">
        <h2 className='gradient__text h2'>Let’s Build Something amazing with GPT-3 OpenAI</h2>
<div className="paragraph-email">
<p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
  Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
  <div className="email-input">
    <input type="email" />
    <button>Get Started</button>
  </div>
  </div>
  <div className="people">
  <img src={people} alt="" />
  <p>1,600 people requested access a visit in last 24 hours</p>
  </div>
      </div>
      <div className="home-img">
        <img src={ai} alt="" />
      </div>
  
    </div>
    <div className="home-icons">
      <img src={google} alt="" />
      <img src={slack} alt="" />
      <img src={atlassian} alt="" />
      <img src={dropbox} alt="" />
      <img src={shopify} alt="" />
    </div>
    </div>

  )
}

export default Header