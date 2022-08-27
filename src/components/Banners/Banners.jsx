import React from 'react'
import Wisky from '../../images/Wisky-Banner.jpg' 
import Vodka from '../../images/Vodka-Banner.jpg'
import Beer from '../../images/Beer-Banner.jpg' 
import '../Banners/Banners_styles.css';
import { useNavigate } from 'react-router-dom';

export default function Banners()
{
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/item/${id}`)
  }

  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" >
          <img src={Wisky}  onClick = {()=> handleNavigate("4hD94ZFxR9wGTPmI3wbJ")} className=" banner d-block w-100" alt="Black Label"/>
        </div>
        <div className="carousel-item">
          <img src={Vodka}  onClick = {()=> handleNavigate("uWhiYvdenJrOYrkHcdv0")} className="banner d-block w-100" alt="Absolute"/>
        </div>
        <div className="carousel-item">
          <img src={Beer} onClick = {()=> handleNavigate("zfD1P9WjKqMEvnVTnXUb")} className="banner d-block w-100 " alt="Corona"/>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>

    </>
  )
}
