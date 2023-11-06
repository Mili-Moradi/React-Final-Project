//Loader.jsx

import React from 'react'
import spinner from '../resoureces/images/spinner3.gif'

export default function Loader() {
  return (
    <>
      <div> <img className='d-block m-auto' src={spinner} alt="" height={150} width={150} /> </div>
    </>
  )
}
