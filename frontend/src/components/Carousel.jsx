import React, { useState } from 'react';
import '../Styles/Carousel.css';
import { useRef } from 'react';

import image1 from '../assets/image-1.png';
import image2 from '../assets/image-2.png';
import image3 from '../assets/imagw-3.jpg';
import image4 from '../assets/image-4.jpg';
import image5 from '../assets/image-5.png';
import image6 from '../assets/image-6.jpg';
import image7 from '../assets/image-7.jpg';

const carouselItems = [
  { id: 1, title: 'Carousel Image One', image: image1 },
  { id: 2, title: 'Carousel Image Two', image: image2 },
  { id: 3, title: 'Carousel Image Three', image: image3 },
  { id: 4, title: 'Carousel Image Four', image: image4 },
  { id: 5, title: 'Carousel Image Five', image: image5 },
  { id: 6, title: 'Carousel Image Six', image: image6 },
  { id: 7, title: 'Carousel Image Seven', image: image7 },
];

function Carousel() {
  const [activeItem, setActiveItem] = useState(carouselItems[0].id);
  const carouselRef = useRef(null); 

  const handleMouseEnter = (id) => {
    setActiveItem(id);
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400; 
      if (direction === 'next') {
        carouselRef.current.scrollLeft += scrollAmount;
      } else {
        carouselRef.current.scrollLeft -= scrollAmount;
      }
    }
  };

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">SELECTED WORKS</h2>
      <div className="carousel-wrapper"> 
        <button className="nav-button prev-button" onClick={() => handleScroll('prev')}>
          &lt;
        </button>
        <div className="carousel-container" ref={carouselRef}>
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className={`carousel-item ${activeItem === item.id ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(item.id)}
            >
              <img src={item.image} alt={item.title} className="item-image" />
              {activeItem === item.id && (
                <div className="gradient-overlay">
                  <span className="overlay-text">{item.title}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="nav-button next-button" onClick={() => handleScroll('next')}>
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Carousel;