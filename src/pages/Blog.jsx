//Blog.jsx

import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../components/Loader';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);               //State für Blog Inhalt
  const [loader, setLoader] = useState(false);          //State für Loader 

  useEffect(() => {
    setLoader(true);
    setTimeout(() => { fetchBlogs() }, 1000);        // nur zum zeigen dass es funktioniert sonst ist so schnell dass man es nicht so richtig sieht
  }, []);

  async function fetchBlogs() {                       //fetch von API Inhalte zu holen
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setBlogs(json))
      .then(setLoader(false))
  }

  return (
    <main className='blog'>
      <div className='pg-header'>
        <div className='container'>
          <h1>Blog</h1>
        </div>
      </div>

      <div className="container content">
        {loader ? <Loader />
          : (
            <div className="row">
              {blogs.map(blog => {
                return (
                  <div className="col-sm-6" key={blog.id}>
                    <div className='card'>
                      <div className='card-body'>
                        <h5 className='card-title'>{blog.title}</h5>
                        <p className='card-text'>{blog.body}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        }
      </div>
    </main>
  )
}
