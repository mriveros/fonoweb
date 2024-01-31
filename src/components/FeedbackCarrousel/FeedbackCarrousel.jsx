import React from 'react'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import './feedbackcarrousel.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: { breakpoint: { max: 2000, min: 1024 }, items: 2, slidesToSlide: 3 },
    tablet: { breakpoint: { max: 1700, min: 464 }, items: 1, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 900, min: 0 }, items: 1, slidesToSlide: 4 }
};

const CustomDot = ({ onMove, index, onClick, active }) => {
  return <li className={active ? "activeDot" : "inactiveDot"} onClick={() => onClick()}></li>;
};

function FeedbackCarrousel() {
  return (
    <Carousel partialVisible={false} centerMode={true} arrows={false} responsive={responsive} showDots={true} className='feedbackcarrousel' customDot={<CustomDot />} >
      <FeedbackCard 
        text={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} 
        author={'Julián Alvarez'} 
        location={'manchester'} 
        image={'julian.jpg'} 
      />
      <FeedbackCard 
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est placerat.'} 
        author={'Lionel Messi'} 
        location={'paris'} 
        image={'messi.jpg'} 
      />
      <FeedbackCard 
        text={'Condimentum vitae sapien pellentesque habitant morbi tristique. In massa tempor nec feugiat nisl pretium fusce. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.'} 
        author={'Leandro Paredes'} 
        location={'Paris Saint-Germain'} 
        image={'paredes.jpg'} 
      />
      <FeedbackCard 
        text={'Amet mauris commodo quis imperdiet massa tincidunt nunc. Porttitor rhoncus dolor purus non enim. A iaculis at erat pellentesque adipiscing commodo elit. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.'} 
        author={'Alexis Mac Allister'} 
        location={'Brighton & Hove Albion'} 
        image={'author.png'} 
      />
    </Carousel>
  )
}

export default FeedbackCarrousel