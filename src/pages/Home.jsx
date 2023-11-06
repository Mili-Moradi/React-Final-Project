//Home.jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import pic1 from '../resoureces/images/8.jpeg';
import pic2 from '../resoureces/images/2.jpg';
import pic3 from '../resoureces/images/1.jpg';

export default function Home() {
  return (
    <main className='home'>
      <div className='pg-header'>
        <div className='container'>
          <h1> Body & Soul </h1>
        </div>
      </div>

      <div className='container content'>

        <h1 className='hello'> Wir heißen Sie herzlich willkommen in unserem Wellness & Spa Hotel </h1>
        <img className='home-img' src={pic1} alt="" width={700} height={200} />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <img className='home-img' src={pic2} alt="" width={700} height={200} />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <img className='home-img' src={pic3} alt="" width={700} height={200} />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

      </div>
    </main>
  )
}
