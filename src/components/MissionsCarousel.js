import React, {useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import '../styles/MissionsCarousel.css';

const MissionsCarousel = ({items}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {items.map(({img, capture, alt}, i) => (
            <Carousel.Item key={i}>
              <div className='img-container'>
                <img src={require(`../resources/BLM.png`)} alt={alt}/>
              </div>
              <p className='text-center'>{capture}</p>
            </Carousel.Item>
        ))}
      </Carousel>
  );
};

export default MissionsCarousel;