import React from 'react'

const GalleryByCategoryCarousel = () => {
  return (
    <div>

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

    </div>
  )
}

export default GalleryByCategoryCarousel