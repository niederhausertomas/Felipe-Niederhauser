import React from 'react';
import { imagenes } from '../../Mock/imagenes';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GalleryByCategory.css';
import Masonry from 'react-masonry-css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const GalleryByCategory = (props) => {
  const [imagenesFiltradas, setImagenesFiltradas] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {categoryName} = useParams();

  useEffect(() => {
    const imagenesFiltradas = imagenes.filter(imagen => imagen.category === categoryName);
    setImagenesFiltradas(imagenesFiltradas);
  }, [categoryName]);

  const openCarousel = (index) => {
    setCurrentImageIndex(index);
    setShowCarousel(true);
  }

  const closeCarousel = () => {
    setShowCarousel(false);
  }

  const handlePrev = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? imagenesFiltradas.length - 1 : currentImageIndex - 1);
  }

  const handleNext = () => {
    setCurrentImageIndex(currentImageIndex === imagenesFiltradas.length - 1 ? 0 : currentImageIndex + 1);
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div>
      <br/><br/><br/><br/>
      {categoryName === "diada castellera san jose" && (
        <div>
          <h2 style={{textAlign: "center"}}>LA UNIÓN HACE LA FUERZA</h2>
          <br/>
          <p className='container'>El día diecinueve de marzo del dos mil veintidós, el barrio del Pi celebró con una fiesta Catellera (castellers de Barcelona y de Cerdanyola) su fiesta mayor “Sant Josep Oriol”.
          El relato fotográfico propone desfragmentar temporalmente el proceso de construcción de un Castell, en donde a través de la dirección a viva voz, el entrelazado de manos y la superposición de pies sobre espaldas, conjugan cuerpos para erigir una gran torre. 
          Narrarlo con fotografia analogica en blanco negro evoca la sensación de atemporalidad, nos recuerda que la unión de las personas siempre es un momento historico.
          </p>
          <br/>
        </div>
      )}
      {categoryName === "SAMUEL" && (
        <div>
          <h2 style={{textAlign: "center"}}>SI NO VES EL PROBLEMA</h2>
          <br/>
          <p className='container'>Durante el año dos mil veintiuno se registraron numerosas denuncias y ataques al colectivo LGTBIQ+ en todo el territorio español, que alentados por un marcado discurso de odio proveniente de partidos de ultraderecha, culminaron en el asesinato de Samuel Luiz en A Coruña. Aquel hecho desencadenó manifestaciones en numerosas ciudades, como la ocurrida en Barcelona el lunes 5 de julio. 
          Mientras el gran grupo de personas circulaba bajo el calor del verano pandémico y al canto de “vecina, despierta, nos matan en tu puerta”, una mirada atenta les escoltaba.
          </p>
          <br/><br/>
        </div>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imagenesFiltradas.map((imagen, index) => (
          <div key={imagen.id} className="my-masonry-grid_item $enable-button-pointers" onClick={() => openCarousel(index)}>
            <img className='w-100' src={imagen.image} alt={`Story ${imagen.id}`} />
          </div>
        ))}
      </Masonry>

      {showCarousel && (
        <div className="carousel-container">
          <Carousel
            selectedItem={currentImageIndex}
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            dynamicHeight={true}
            infiniteLoop={true}
            onClickPrev={handlePrev}
            onClickNext={handleNext}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  className="carousel-custom-arrow carousel-custom-arrow-left"
                  onClick={onClickHandler}
                  >
                  <i className="fas fa-chevron-left"></i>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  className="carousel-custom-arrow carousel-custom-arrow-right"
                  onClick={onClickHandler}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              )
            }
            onClose={closeCarousel}
          >
            {imagenesFiltradas.map((imagen) => (
              <div key={imagen.id}>
                <img src={imagen.image} alt={`Story ${imagen.id}`} />
              </div>
            ))}
          </Carousel>
          <div className="carousel-overlay" onClick={closeCarousel}></div>
        </div>
      )}
    </div>
  );
};

export default GalleryByCategory;