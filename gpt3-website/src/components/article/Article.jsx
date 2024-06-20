import React from 'react'
import './article.css'


const Article = ({img}) => {
  return (
    <div className='article'>
      <div className="article-container">
       <img src= {img} alt=""/>
       <div className="article-text">
        <div className="heading">
       <span className='date'>Sep 26, 2021</span>
       <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
       </div>
       <span className='full-article'>Read Full Article</span>
       </div>
      </div>
     
    </div>
  )
}

export default Article
