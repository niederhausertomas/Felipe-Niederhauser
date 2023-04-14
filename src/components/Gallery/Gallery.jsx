import React from 'react';
import './Gallery.css';

const Gallery = ({imagenes}) => {
    return (
        <div className="container">
            <div className="row">
                {imagenes.map((imagen) => (
                <div key={imagen.id} className="col-sm-4">
                    <img className='w-100' src={imagen.image} alt={`Story ${imagen.id}`} />
                </div>
                ))}
            </div>
        </div>
      )
    }

export default Gallery;