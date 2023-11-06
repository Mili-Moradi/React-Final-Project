//Error.jsx

import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <main>
      <div className='pg-header'>
        <div className='container'>
          <h1>Error 404</h1>
        </div>
      </div>
      <div className='container content '>
        <div className='error-message'>
          <p>PAGE NOT FOUND</p>
          <Link to="/" className='btn btn-primary'>Go Back to Homepage</Link>
        </div>
      </div>
    </main>
  )
}
