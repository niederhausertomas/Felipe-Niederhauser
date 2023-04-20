import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <div className='container bio'>
        <br/><br/><br/><br/>
        <div className='d-flex justify-content-evenly'>
            <img className='w-25' src="./images/IMG_2150.jpg" alt="Felipe Niederhauser"/>
            <div className='d-flex align-items-center '>
              <p className='container fs-5 lh-lg bioText'>
              Soy Felipe Niederhauser, comunicador de formación y fotoperiodista freelance. 
              Encuentro en la fotografía un lenguaje universal para contar historias humanas, especialmente aquellas de carácter social, político y de derechos humanos.
              Actualmente me encuentro investigando, en el marco del Máster en Medios, Comunicación y Cultura de la Universidad Autónoma de Barcelona, sobre la labor del fotoperiodismo en las coberturas de desahucios. 
              Puedes contactarme a través de felipeniederhauser@gmail.com o +34 685 96 17 29
              </p>
            </div>

        </div>
    </div>
  )
}

export default Bio