import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="./images/foto1.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./images/foto2.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./images/foto3.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>
  )
}

export default Carousel