import React from 'react'
import './workscarrousel.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: { breakpoint: { max: 2000, min: 1024 }, items: 5, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1700, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 900, min: 0 }, items: 1, slidesToSlide: 1 }
};

function WorksCarrousel() {
  return (
    <Carousel responsive={responsive} showDots={false} arrows={true} containerClass="worksContainer" itemClass="worksCard" infinite={true}>
      <img src="work1.png" alt="" />
      <img src="work2.png" alt="" />
      <img src="work3.png" alt="" />
      <img src="work4.png" alt="" />
      <img src="work5.jpg" alt="" />
    </Carousel>
  )
}

export default WorksCarrousel