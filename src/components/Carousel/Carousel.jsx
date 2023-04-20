import React, { useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
    useEffect(() => {
        let carouselItems = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        let showNextSlide = () => {
            carouselItems[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carouselItems[currentIndex].classList.add('active');
        };
    let intervalId = setInterval(showNextSlide, 3000);
    return () => {
        clearInterval(intervalId);
    };
    }, []);

    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./images/1OCT1.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./images/24M19-13.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./images/24M19-20.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./images/CLIMATESTRIKE-1.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./images/MASACREMELILLA-3.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./images/SAMUEL2-1.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./images/NOAMPLIACIO-4.jpg" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./images/VAGAGRAL-6.jpg" className="d-block" alt="..." />
                </div>
            </div>
        </div>
    );
}

export default Carousel;