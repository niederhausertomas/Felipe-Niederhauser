import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="./images/24M2.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./images/24M19-14.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./images/1OCT5.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./images/SAMUEL 7.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>
  )
}

export default Carousel