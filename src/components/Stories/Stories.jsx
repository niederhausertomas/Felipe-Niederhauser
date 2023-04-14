import React from 'react';
import './Stories.css';
import {imagenes} from '../../Mock/imagenes.js';

const Stories = () => {
    return (
        <div className="container">
            {imagenes.map((imagen) => (
            <div key={imagen.id}>
                <br/><br/>
                <img className='w-100' src={imagen.image} alt={`Story ${imagen.id}`} />
            </div>
            ))}
        </div>
)}

export default Stories;