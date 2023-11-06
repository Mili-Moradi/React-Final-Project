//About.jsx

import React from 'react'
import pic1 from '../resoureces/images/6.jpeg';
import pic2 from '../resoureces/images/3.jpeg';
import pic3 from '../resoureces/images/7.jpeg';

export default function About() {
  return (
    <main className='about'>
      <div className='pg-header'>
        <div className='container'>
          <h1>ÜBER UNS</h1>
        </div>
      </div>
      <div className='container content'>
        <div className='row'>
          <div className="container content">
            <div className="row">
              <div className="col-lg-4">
                <h2>PHILOSOPHIE</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <img src={pic1} alt='' width={300} height={200} ></img>
              </div>

              <div className="col-lg-4">
                <h2>UNSER MASSAGEANGEBOT</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <img src={pic2} alt='' width={300} height={200} ></img>
              </div>

              <div className="col-lg-4">
                <h2>TERMINE</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <img src={pic3} alt='' width={300} height={200} ></img>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>

  )
}
