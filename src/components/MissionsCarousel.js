import React, {useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import '../styles/MissionsCarousel.css'

const MissionsCarousel = ({items}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className='img-container'>
            <img// className="d-block w-100"
                src={require('../resources/BLM.png')} alt='blm'
            />
          </div>
          <p className='text-center'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est
            laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Carousel.Item>
        <Carousel.Item>
          <div className='img-container'>
            <img// className="d-block w-100"
                src={require('../resources/BLM.png')} alt='blm'
            />
          </div>
          <p className='text-center'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est
            laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Carousel.Item>
        <Carousel.Item>
          <div className='img-container'>
            <img// className="d-block w-100"
                src={require('../resources/BLM.png')} alt='blm'
            />
          </div>
          <p className='text-center'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est
            laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Carousel.Item>
      </Carousel>
  );
};

export default MissionsCarousel;