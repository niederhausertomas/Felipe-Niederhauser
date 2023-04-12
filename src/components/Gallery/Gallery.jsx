import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-4'>
                <img src="./images/foto1.jpg" alt="" />
                <img className='secondIMG' src="./images/foto3.jpg" alt="" />
            </div>
            <div className='col-sm-4'>
                <img src="./images/foto2.jpg" alt="" />
            </div>
            <div className='col-sm-4'>
                <img src="./images/foto5.jpg" alt="" />
                <img className='secondIMG' src="./images/foto1.jpg" alt="" />
            </div>
            <div className='col-sm-4'>
                <img src="./images/foto4.jpg" alt="" />
            </div>
            <div className='col-sm-4'>
                <img src="./images/foto3.jpg" alt="" />
                <img className='secondIMG' src="./images/foto5.jpg" alt="" />
            </div>
            
            <div className='col-sm-4'>
                <img src="./images/foto1.jpg" alt="" />
                <img className='secondIMG' src="./images/foto3.jpg" alt="" />
            </div>
            <div className='col-sm-4'>
                <img src="./images/foto2.jpg" alt="" />
            </div>
            <div className='col-sm-4'>
                <img src="./images/foto5.jpg" alt="" />
                <img className='secondIMG' src="./images/foto1.jpg" alt="" />
            </div>
            <div className='col-sm-4'>
                <img src="./images/foto4.jpg" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Gallery