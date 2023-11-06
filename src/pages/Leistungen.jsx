//Leistungn.jsx

import React from 'react'
import LEISTUNGEN from '../data'

export default function Leistungen() {
  return (
    <main className='leistungen'>
      <div className="pg-header">
        <div className="container">
          <h1>Leistungen</h1>
        </div>
      </div>
      
      <div className="container content">
        <div className="row products-row">
          {
            LEISTUNGEN.map((leistung) => {
              return (
                <div className="col-lg-4" key={leistung.id}>

                  <div className="card">
                    <div className="img-wrap">
                      <img src={leistung.image} alt="" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{leistung.name}</h5>
                      <p className="card-text">{leistung.details}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Preis: <strong className="price">{leistung.price}</strong></span>
                      </div>
                    </div> 
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </main>
  )
}
