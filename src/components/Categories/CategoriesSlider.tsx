import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CategoriesCard from './CategoriesCard';
function CategoriesSlider() {
    const categories = [
        {
          name: "Category 1",
          path: "#",
          bgcolor: generate(),
        },
        {
          name: "Category 2",
          path: "#",
          bgcolor: generate(),
        },
        {
          name: "Category 3",
          path: "#",
          bgcolor: generate(),
        },
        {
          name: "Category 4",
          path: "#",
          bgcolor: generate(),
        },
        {
          name: "Category 5",
          path: "#",
          bgcolor: generate(),
        },
        {
          name: "Category 6",
          path: "#",
          bgcolor: generate(),
        },
        {
          name: "Category 7",
          path: "#",
          bgcolor: generate(),
        },
      ];
    
      function createHex() {
        var hexCode1 = "";
        var hexValues1 = "0123456789abcdef";
    
        for (var i = 0; i < 6; i++) {
          hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
        }
        return hexCode1;
      }
    
      function generate() {
    
        var deg = Math.floor(Math.random() * 360);
    
        var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() + ")";
        console.log(gradient);
        return gradient;
      }
  return (
    < div className='slider'> 
       <h1 style={{
        fontSize: "20px",
        fontWeight: "400",
        margin: "10px 5px"
      }}>Categories</h1>
      <Swiper
        slidesPerView={0}
        spaceBetween={9}
        pagination={{
          clickable: true,
        }}
        style={{
            overflow: "hidden"
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        //   '@1.00': {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          categories.map((category) => {
            return (
              <SwiperSlide style={{
                overflow: "hidden"
              }}>
                <CategoriesCard {...category} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default CategoriesSlider
