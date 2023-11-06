// Kontak.js

import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'      //Allert bei Submit

export default function Kontakt() {
    const [data, setData] = useState({ name: "", email: "", telefon: "", nachricht: "" });    //useState für Form Inputs

    const handleChange = (e) => {                                                           // handleChange    Inputs Inhalt wird in ein p unter gezeigt 
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {                                                           //handleSubmit     input felder wird wieder leer
        e.preventDefault()
        setData({ name: "", email: "", telefon: "", nachricht: "" })

        Swal.fire({
            position: 'center',                                                             // Allert bei Versand email
            icon: 'success',
            title: 'Vielen Dank für Ihre Nachricht! Sie wurde erfolgreich versendet.',
            showConfirmButton: false,
            timer: 3000
        })
    }

    return (
        <main className='kontakt'>
            <div className='pg-header'>
                <div className='container'>
                    <h1>Kontakt</h1>
                </div>
            </div>

            <div className="container content">
                <div className=" oeffnungzeiten">
                    <h2>Behandlungszeiten</h2>
                    <p>Mo. - Do ......................  13.00 - 21.00</p>
                </div>

                <form method='post' onSubmit={handleSubmit}>
                    <h5> Bitte kontaktieren Sie uns <span>hier</span></h5>
                    <h6>Wir melden uns so bald wie möglich bei Ihnen.</h6>
                    <p>&nbsp;</p>
                    <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder='Ihre Name...' required />
                    <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder='Email Adresse...' />
                    <input type="tel" name="telefon" id="" onChange={handleChange} value={data.telefon} placeholder='Telefonnummer...' required />
                    <textarea name="nachricht" id="" onChange={handleChange} value={data.nachricht} cols="30" rows="10" placeholder='Ihre Nachricht...' />
                    <button type='submit' >Send</button>
                    <p>{data.name} {data.email} {data.telefon}{data.nachricht}</p>
                </form>
            </div>
        </main>
    )
}
