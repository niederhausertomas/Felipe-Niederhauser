import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <div className='mx-4 bio'>
        <br/><br/>
        <div className='d-flex flex-column flex-sm-row justify-content-start'>
          <div className='photoFelipe'>
            <img src="./images/IMG_2150.jpg" alt="Felipe Niederhauser"/>
          </div>
          <div className='bioTitleTextContainer'>
              <h2 className='bioTitle'>
                <b>FELIPE NIEDERHAUSER</b><br/> 
                Buenos Aires, 1988</h2><br/>
              <p className='lh-sm bioText'>
              Soy comunicador y fotoperiodista freelance con interés en temas de derechos humanos, políticos y sociales con base en Barcelona. Encuentro en la fotografía un lenguaje universal para contar historias humanas.<br/><br/>
              Actualmente me encuentro investigando, en el marco del Máster en Medios, Comunicación y Cultura de la Universidad Autónoma de Barcelona, sobre la labor del fotoperiodismo en las coberturas de desahucios.<br/><br/>
              Puedes contactarme a través de <br/>
              felipeniederhauser@gmail.com o +34 685 96 17 29

              </p>
            </div>
        </div>
    </div>
  )
}

export default Bio