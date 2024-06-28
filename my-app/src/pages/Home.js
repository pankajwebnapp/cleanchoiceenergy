import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Components/Search'
import Featured from '../Components/Featured'
import Testimonial from '../Components/Testimonial'
import Subscribe from '../Components/Subscribe'

function Home() {
  return (
    <>
     <div className='hero p-tb'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-8'>
              <h1 className='mb-3'>A cleaner future starts with you.</h1>
              <p>Together, we can create a brighter future for all by choosing easy, impactful renewable energy solutions.</p>
            </div>
            <div className='col-lg-8'>
            <Search />
            </div>
            <div className='col-md-12 pt-5'>
              <video controls autoPlay muted>
                <source src='/Video/video.mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>

     <Featured />

      <div className='container p-tb'>
        <div className='text-center pb-md-5 pb-4'>
          <h2 className='mb-3'>Small effort. Big impact.</h2>
          <p>Empowering you to change the world, without changing the way you live.</p>
        </div>
        <div className='row justify-content-end align-items-center repeater-wrap'>
          <div className='col-lg-5 col-md-6 repeater-content pr-md-4'>
            <h4>The <span className='text-blue'>easy</span> way to make a positive impact</h4>
            <p>You can choose clean, pollution-free energy in minutes—and you won't have to change your daily routine.</p>
          </div>
          <div className='col-md-6 repeater-img'>
            <img src={require('../images/Value-prop-easiest-way.jpg')} />
          </div>
          <div className='col-lg-5 col-md-6 repeater-content pr-md-4'>
            <h4>The cleaner and <span className='text-green'>greener</span> option</h4>
            <p>We have high standards for our energy sources, so you'll know you're getting clean, 100% renewable energy. Adios dirty fossil fuels.</p>
          </div>
          <div className='col-md-6 repeater-img'>
            <img src={require('../images/Value-prop-cleaner.jpg')} />
          </div>
          <div className='col-lg-5 col-md-6 repeater-content pr-md-4'>
            <h4>The <span className='text-blue'>easy</span> way to make a positive impact</h4>
            <p>You can choose clean, pollution-free energy in minutes—and you won't have to change your daily routine.</p>
          </div>
          <div className='col-md-6 repeater-img'>
            <img src={require('../images/Value-prop-easiest-way.jpg')} />
          </div>
          <div className='col-lg-5 col-md-6 repeater-content pr-md-4'>
            <h4>The cleaner and <span className='text-green'>greener</span> option</h4>
            <p>We have high standards for our energy sources, so you'll know you're getting clean, 100% renewable energy. Adios dirty fossil fuels.</p>
          </div>
          <div className='col-md-6 repeater-img'>
            <img src={require('../images/Value-prop-cleaner.jpg')} />
          </div>
        </div>
      </div>

      <div className='counter text-center' style={{ backgroundImage: 'url(' + require('../images/impact-module-bg.png') + ')' }}>
        <div className='container bor-top p-tb'>
          <img width={'50px'} src={require('../images/impact-icon.png')} />
          <h3 className='mt-5 mb-4'>Join us in the fight against climate change</h3>
          <p>We’re on a mission to make clean air and renewable energy available to all.</p>
          <div className='counter-wrap pt-4'>
            <h6 className='mb-0'>Together, we have prevented</h6>
            <span>13,280,208,088</span>
            <h6>lbs of carbon emissions</h6>
          </div>
        </div>
      </div>

      <Testimonial />

      <div className='container bor-top p-tb'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='text-center'>
              <img width={'50px'} src={require('../images/impact-icon.png')} />
              <h3 className='mt-4 mb-4'>Frequently asked questions</h3>
            </div>
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <button className="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Does becoming a CleanChoice Energy customer help the environment?
                  </button>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Yes. You’ll be greatly reducing your carbon footprint by sourcing electricity that comes from clean, renewable sources. You’ll also be helping to increase demand for clean energy, paving the way to become less reliant on polluting fossil fuels.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <button className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What is CleanChoice Energy's mission?
                  </button>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    Yes. You’ll be greatly reducing your carbon footprint by sourcing electricity that comes from clean, renewable sources. You’ll also be helping to increase demand for clean energy, paving the way to become less reliant on polluting fossil fuels.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <button className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How is CleanChoice Energy different than other energy companies?
                  </button>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    Yes. You’ll be greatly reducing your carbon footprint by sourcing electricity that comes from clean, renewable sources. You’ll also be helping to increase demand for clean energy, paving the way to become less reliant on polluting fossil fuels.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <button className="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Which product is right for me?
                  </button>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div className="card-body">
                    Yes. You’ll be greatly reducing your carbon footprint by sourcing electricity that comes from clean, renewable sources. You’ll also be helping to increase demand for clean energy, paving the way to become less reliant on polluting fossil fuels.
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center pt-5'>
                <Link className='btn' to="#">See all FAQs</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container bor-top p-tb'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-7'>
            <img width={'50px'} src={require('../images/impact-icon.png')} />
            <h3 className='mt-4 mb-3'>Check out our blog</h3>
            <p>Find everything under the sun related to clean energy, climate news, green living tips, and more</p>
          </div>
        </div>
        <div className='blog-wrap row justify-content-start flex-nowrap pt-5' style={{overflowX: "auto"}}>
          <div className='col-lg-3'>
            <Link className='block-img' to="#"><img src={require('../images/blog-img-01.jpg')} /></Link>
            <Link className='text-dark mt-2 d-block' to="#"><h5>How to Save Energy in Your Home</h5></Link>
          </div>
          <div className='col-lg-3'>
            <Link className='block-img' to="#"><img src={require('../images/blog-img-02.jpg')} /></Link>
            <Link className='text-dark mt-2 d-block' to="#"><h5>20 Ways You Can Reduce Your Carbon Footprint</h5></Link>
          </div>
          <div className='col-lg-3'>
            <Link className='block-img' to="#"><img src={require('../images/blog-img-01.jpg')} /></Link>
            <Link className='text-dark mt-2 d-block' to="#"><h5>Our Favorite National Parks</h5></Link>
          </div>
          <div className='col-lg-3'>
            <Link className='block-img' to="#"><img src={require('../images/blog-img-02.jpg')} /></Link>
            <Link className='text-dark mt-2 d-block' to="#"><h5>12 Ways to Teach Kids About the Environment</h5></Link>
          </div>
        </div>
        <div className='text-center pt-5'>
        <Link className='btn' to="#">See all articles</Link>
        </div>
      </div>

      <div className='container bor-top p-tb text-center'>
        <div className='text-center p-tb position-relative about' style={{ backgroundImage: 'url(' + require('../images/ForestRoad.jpg') + ')' }}>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <img width={'50px'} src={require('../images/Quote-Icon.png')} />
              <h2 className='mt-5 mb-5 text-white'>We’re more than a clean energy company.</h2>
              <h2 className='mb-5 text-white'>We’re united by a vision for the future.</h2>
              <h2 className='text-white font-weight-normal'>-Tom Matzzie, CEO and Founder</h2>
            </div>
          </div>
        </div>
        <div className='row justify-content-center pt-5 px-md-5'>
          <div className='col-lg-7'>
            <h5 className='font-weight-normal'>Our vision is a world free of catastrophic climate change with pure, clean air and abundant renewable energy. We're committed to creating a better environment for future generations, and we’re committed to caring for our customers, our people, and the planet.</h5>
            <div className='text-center pt-5'>
            <Link className='btn' to="#">About us</Link>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />

    </>
  )
}

export default Home

