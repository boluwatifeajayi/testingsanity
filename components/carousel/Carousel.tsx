import React, { useEffect, useState } from "react";
import "./Carousel.style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vet from "./images/Steering.svg";
import Track from "./images/Trips.svg";
import Eme from "./images/Eme.svg";
import Matched from "./images/Matched.svg";
import pic1 from '../../assets/images/pic1.png';

import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';
import pic5 from '../../assets/images/pic5.png';
import Image from 'next/image';
const Carousel = () => {
  var [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = 890;

      if (width >= breakpoint) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    autoplayspeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile?1:4,
    slidesToScroll: 1,
    responsive: [
      // Responsive settings...
    ],
  };

  const cards = [
    {
      image: pic1,
      title: 'From Data to Strategy',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic2,
      title: 'AI in Everyday Life',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic5,
      title: 'The Evolution of Predictive Analytics',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic2,
      title: 'Understanding Machine Learning Algorithms',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic5,
      title: ' Challenges in Data Analytics',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
   
    // Add more cards here
  ];


  return (
  <section className="banner-container container mx-auto ml-4 overflow-x-hidden">
  <Slider {...settings}>
    {cards.map((card, index) => (
      <div className="individual-slides" key={index}>
        <Image src={card.image} alt="image" className="Svg" />
        <br />
        <p className="mt-3 text-xl md:text-xl font-bold text-blue-950">{card.title}</p>
        <div className="flex gap-2 mt-3">
          <p className="text-blue-950 text-lg">{card.date}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-blue-400 text-lg">{card.price}</p>
        </div>
      </div>
    ))}
  </Slider>
</section>

  );
};

export default Carousel;