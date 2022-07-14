import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wisky from '../../images/Wisky-Banner.jpg' 
import Vodka from '../../images/Vodka-Banner.jpg'
import Beer from '../../images/Beer-Banner.jpg' 
import '../Banners/styles.css';


export default function Banners()
{
  return (
    
    

    <Carousel>
      <Carousel.Item>
      <img  className='banner' src={Wisky} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img  className='banner' src={Beer} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img  className='banner' src={Vodka} alt="" />
      </Carousel.Item>
    </Carousel>


    
   
  )

}
