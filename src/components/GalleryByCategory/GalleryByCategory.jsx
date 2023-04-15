import React from 'react';
import { imagenes } from '../../Mock/imagenes';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GalleryByCategory = (props) => {
  const [imagenesFiltradas, setImagenesFiltradas] = useState([]);
  const {categoryName} = useParams();

  useEffect(() => {
    const imagenesFiltradas = imagenes.filter(imagen => imagen.category === categoryName);
    setImagenesFiltradas(imagenesFiltradas);
  }, [categoryName]);

  return (
    <div className="container">
      <div className="row">
        {imagenesFiltradas.map((imagen) => (
          <div key={imagen.id} className="col-sm-4">
            <img className='w-100' src={imagen.image} alt={`Story ${imagen.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryByCategory