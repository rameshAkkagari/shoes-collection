import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
// import { IconButton } from '@material-tailwind/react';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import classes from './Swipe.module.css';
import './Swipe.css';
const shoes = [
    {
        img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71a00703e8c14c76aa8471445a9eaf40_9366/Ultrabounce_Shoes_Blue_HP5783_HM1.jpg"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMRRyKnBrXzJ5PE32z-tO7cIpGvHb-RyLR7_J5Y5xJg&s"
    },
    {
        img:"https://hips.hearstapps.com/hmg-prod/images/run-affordable-running-shoes-1676481206.jpg?resize=2048:*"
    },
    {
        img:"https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?cs=srgb&dl=pexels-ray-piedra-1456706.jpg&fm=jpg"
    }
]
function SwipeImages() {

  return (
    <div className='swiper-image'>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      loop={true}
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    className='swiper'
    >
        {shoes.map((item,index)=>(
            <SwiperSlide key={index}>
                <div className="imgcontainer">
                    <img className="img" key={index} src={item.img}/>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
    
    </div>
  )
}

export default SwipeImages