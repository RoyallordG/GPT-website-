import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className='blog section-margin-bottom'>
      <div className="first-column">
        <Article img={blog1}/>
      </div>
    <div className="second-column">
      <Article img={blog2}/>
      <Article img={blog3}/>
       </div>
       <div className="third-column">
      <Article img={blog4}/>
      <Article img={blog5}/>
    </div>
    </div>
    
  )
}

export default Blog
