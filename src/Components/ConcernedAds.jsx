import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Featured = () => {
  const carouselItems = [
    
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbe6GszzF_C5KWI9qZ1OEHmOXXHFiXXznUJg&s",
      title: "Ad Poster 4",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LIdezq9uv79hgzWJy_PbMakCOHtltVHyTA&s",
      title: "Ayurvedic Treatments",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU63PrMLa4crt3F2SbfxtrzG-7IiUMiUa9lQ&s",
      title: "Malayali Restaurent",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24Anlwt5pAb_NTdHweXLCjWGecoyvAVQpXQ&s",
      title: "Pittapillil",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wV3yJi4wWkokv5Db5YyAJLYBQTk_whjgNg&s",
      title: "Trends",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT397QRTbKO3YEDwslCFzGEYGxDVUGASZRW3w&s",
      title: "M4Men",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvfqgJu3x88Rd9yYj_iLbhnA9oTrqkuExoQ&s",
      title: "Royal",
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
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true} customTransition="all 1s" transitionDuration={500}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-full w-full p-2">
            <img
              src={item.imageSrc}
              alt={item.title}
              className="object-cover w-full h-[300px] rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white">
              <h2 className="text-xl font-bold">{item.title}</h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Featured;
