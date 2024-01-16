import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import News from './News'

function App() {

  let [articles,setArticles] = useState([])
  
  useEffect(()=>{
        fetch("https://newsapi.org/v2/everything?q=india&from=2024-01-12&apiKey=483454edd17549f5ae07a0be4667c70d")
        .then((response)=>response.json())
        .then((news)=>{
          setArticles(news.articles);
          console.log(news.articles);
        })
        .catch((err)=>{
          console.log(err);
        })
  
      },[])
  
  return (
    <div className='app'>
      <header className='header'>
            <h1>NEWS APP</h1>
            <input type="text" placeholder='Search News' />
      </header>

    <section className='news-articles'>
      {
        articles.map((article)=>{
          return(
            <News article={article}/>
          )
        })
      }

      
      

      </section>
    </div>
  )
}

export default App
