import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import {imagenes} from '../../Mock/imagenes.js';

const Main = () => {
  return (
    <div>
        <Carousel/>
        <Gallery imagenes={imagenes}/>
    </div>
  )
}

export default Main