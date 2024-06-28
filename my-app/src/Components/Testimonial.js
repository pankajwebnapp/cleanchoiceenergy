import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function Testimonial() {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    infinite: false,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <>
      <div className='container bor-top p-tb testimonial'>
        <div className='row justify-content-center text-center pb-lg-5'>
          <div className='col-md-8'>
            <img width={'50px'} src={require('../images/impact-icon.png')} />
            <h3 className='mt-4 mb-4'>See what others have to say about CleanChoice Energy</h3>
          </div>
        </div>

        <Slider {...settings}>
          <div class="slide-item d-flex">
            <div class="slide-img">
              <img src={require('../images/lauren-img.jpg')} />
            </div>
            <div class="slide-content">
              <p className='mb-0'>Thank you for providing this environmentally friendly power option and with minimal effort on the part of the consumer!</p>
              <span>Lauren</span>
            </div>
          </div>
          <div class="slide-item d-flex">
            <div class="slide-img">
              <img src={require('../images/elise-img.jpg')} />
            </div>
            <div class="slide-content">
              <p className='mb-0'>We like getting reports that show how much of a difference our household has made by using CleanChoice Energy.</p>
              <span>Elise</span>
            </div>
          </div>
          <div class="slide-item d-flex">
            <div class="slide-img">
              <img src={require('../images/lauren-img.jpg')} />
            </div>
            <div class="slide-content">
              <p className='mb-0'>Thank you for providing this environmentally friendly power option and with minimal effort on the part of the consumer!</p>
              <span>Lauren</span>
            </div>
          </div>
          <div class="slide-item d-flex">
            <div class="slide-img">
              <img src={require('../images/elise-img.jpg')} />
            </div>
            <div class="slide-content">
              <p className='mb-0'>We like getting reports that show how much of a difference our household has made by using CleanChoice Energy.</p>
              <span>Elise</span>
            </div>
          </div>
        </Slider>
      </div>
    </>

  )
}

export default Testimonial
