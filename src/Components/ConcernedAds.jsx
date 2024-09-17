import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import hiringImage from '../assets/featured.jpg';
import wpbsImage from '../assets/wpbs.jpeg.jpg';
import algaImage from '../assets/alga.jpeg.jpg';
import jaicoImage from '../assets/Jaico.jpeg.jpg';

const Featured = () => {
  const carouselItems = [
    {
      imageSrc: hiringImage,
    },
    {
      imageSrc: wpbsImage,
      
    },
    {
      imageSrc: algaImage,
      
    },
    {
      imageSrc: jaicoImage,
     
    },
    
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="w-full mt-10">
      <Carousel 
        responsive={responsive} 
        infinite={true} 
        autoPlay={true} 
        autoPlaySpeed={3000} 
        keyBoardControl={true} 
        customTransition="all 1s" 
        transitionDuration={500}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-full w-[434px] p-2">
            <img
              src={item.imageSrc}
              alt={item.title}
              className="object-cover w-[434px] h-[300px] rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h2 className="text-xl font-bold">{item.title}</h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Featured;
