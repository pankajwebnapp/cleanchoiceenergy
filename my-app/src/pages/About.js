import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Components/Search'
import Subscribe from '../Components/Subscribe'
function About() {
  return (
    <>
      <div className='hero p-tb'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-8'>
              <h1 className='mb-3'>Clean energy for everyone, everywhere</h1>
              <p>We envision a world free of catastrophic climate change with pure, clean air and abundant renewable energy. We’re on a mission to make it easy for everyone, everywhere to choose clean energy.</p>
            </div>
            <div className='col-md-12 pt-5'>
              <video controls autoPlay muted>
                <source src='/Video/video.mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className='container p-tb bor-top text-center'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <h2>We are CleanChoice.</h2>
          </div>
        </div>
      </div>

      <div className='container p-tb bor-top'>
        <h2 className='text-center mb-md-5 mb-3'>Our story</h2>
        <div className='row justify-content-end align-items-center text-md-left text-center'>
          <div className='col-lg-5 col-md-6 pr-md-4'>
            <p>Growing up in an industrial region of Pennsylvania, Tom Matzzie, our founder and CEO, witnessed the impact of air pollution—caused by burning coal—on the health and safety of his community.</p>
            <p>Eager to take action, he installed solar panels for his home, but found the process to be unnecessarily difficult with permits, site visits, and meetings with contractors. Tom wanted to make clean energy easier and knew there must be a better way for more people to choose clean energy.</p>
            <p>In 2012, we started on a journey to revolutionize clean energy—to create a world free of catastrophic climate change. Now, over 10 years later, we’re still working hard to make clean energy easier to access for everyone, everywhere.</p>
          </div>
          <div className='col-md-6 mt-md-0 mt-4'>
            <img className='radius-15' src={require('../images/our-story.jpg')} />
          </div>
        </div>
      </div>

      <div className='container p-tb bor-top'>
        <h2 className='text-center mb-md-5 mb-3'>Our products</h2>
        <div className='row justify-content-end align-items-center text-md-left text-center'>
          <div className='col-lg-5 col-md-6 pr-md-4'>
            <p>Today we are proud to connect more customers than ever to clean energy, and we are striving toward a cleaner future powered by energy generated at our own solar farms. With the support of our customers, we are developing even more solar farms and expanding access to clean energy through a variety of nationwide clean energy solutions.</p>
            <p>As we continue to develop more solar farms, we will offer even more new ways to access farm-to-table clean energy—helping our customers make an even bigger positive impact in the fight against climate change.</p>
          </div>
          <div className='col-md-6 mt-md-0 mt-4'>
            <img className='radius-15' src={require('../images/our-products.jpg')} />
          </div>
        </div>
      </div>

      <div className='container p-tb bor-top'>
        <h2 className='text-center mb-md-5 mb-3'>Our promise</h2>
        <div className='row justify-content-end align-items-center text-md-left text-center'>
          <div className='col-lg-5 col-md-6 pr-md-4'>
            <p>At CleanChoice, we’re on a mission to bring clean energy to everyone, everywhere. Going beyond that, we care about making a positive impact on both our planet and our world.</p>
            <p>We hold ourselves to high standards when it comes to caring for our customers, our team, and the planet. We want to do everything we can to take care of the people and places that matter most to us. Learn more about our commitments</p>
            <Link to="">here.</Link>
          </div>
          <div className='col-md-6 mt-md-0 mt-4'>
            <img className='radius-15' src={require('../images/our-story.jpg')} />
          </div>
        </div>
      </div>

      <div className='container bor-top'>
        <Search />
      </div>

      <div className='container p-tb'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-7'>
            <h3 className='mb-3'>Everything under the sun</h3>
            <p>Learn more about our leadership team, career opportunities, and all things related to climate and clean energy</p>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6 pt-5'>
            <Link className='block-img text-dark' to="/our-team">
              <img className='w-100 mb-3' src={require('../images/blog-img-01.jpg')} />
              <h5>Our Leaders</h5>
              <p>United by a passion to make our world more sustainable, we are committed to bringing clean energy to everyone, everywhere.</p>
              <h6 className='text-blue'>Meet our leadership team</h6>
            </Link>
          </div>
          <div className='col-lg-4 col-md-6 pt-5'>
            <Link className='block-img text-dark' to="/careers">
              <img className='w-100 mb-3' src={require('../images/blog-img-02.jpg')} />
              <h5>Careers</h5>
              <p>United by a passion to make our world more sustainable, we are committed to bringing clean energy to everyone, everywhere.</p>
              <h6 className='text-blue'>View Careers</h6>
            </Link>
          </div>
          <div className='col-lg-4 col-md-6 pt-5'>
            <Link className='block-img text-dark' to="/articles">
              <img className='w-100 mb-3' src={require('../images/blog-img-01.jpg')} />
              <h5>Articles</h5>
              <p>United by a passion to make our world more sustainable, we are committed to bringing clean energy to everyone, everywhere.</p>
              <h6 className='text-blue'>View the blog</h6>
            </Link>
          </div>
        </div>
      </div>

      <div className='container bor-top p-tb'>
        <div className='row justify-content-center'>
          <div className='col-lg-9'>
            <div className='text-center'>
              <h2 className='mb-3'>Celebrating 10+ years—and we’re just getting started</h2>
              <p>For more than 10 years, CleanChoice Energy has helped homeowners and renters make a positive impact on the environment. Here’s a look at our journey since our founding in 2012:</p>
            </div>
            <div className='timeline mt-5'>
              <div className='timeline-col d-flex'>
                <div className='timeline-icon'>
                  <img src={require('../images/light-icon.png')} />
                </div>
                <div className='timeline-content d-flex'>
                  <strong>2012</strong>
                  <ul>
                    <li>Our company was founded</li>
                  </ul>
                </div>
              </div>
              <div className='timeline-col d-flex'>
                <div className='timeline-icon'>
                  <img src={require('../images/light-icon.png')} />
                </div>
                <div className='timeline-content d-flex'>
                  <strong>2013</strong>
                  <ul>
                    <li>Began supplying customers with 100% renewable energy</li>
                  </ul>
                </div>
              </div>
              <div className='timeline-col d-flex'>
                <div className='timeline-icon'>
                  <img src={require('../images/light-icon.png')} />
                </div>
                <div className='timeline-content d-flex'>
                  <strong>2015</strong>
                  <ul>
                    <li>Passed 50,000 clean electricity customers</li>
                  </ul>
                </div>
              </div>
              <div className='timeline-col d-flex'>
                <div className='timeline-icon'>
                  <img src={require('../images/light-icon.png')} />
                </div>
                <div className='timeline-content d-flex'>
                  <strong>2016</strong>
                  <ul>
                    <li>Ethical Electric changed its name to CleanChoice Energy</li>
                    <li>Won Best for the World, Best for the Environment</li>
                    <li>Received DOE SunShot Award</li>
                  </ul>
                </div>
              </div>
              <div className='timeline-col d-flex'>
                <div className='timeline-icon'>
                  <img src={require('../images/light-icon.png')} />
                </div>
                <div className='timeline-content d-flex'>
                  <strong>2017</strong>
                  <ul>
                    <li>Ranked 113 on Deloitte’s Technology Fast 500</li>
                  </ul>
                </div>
              </div>
              <div className='timeline-col d-flex'>
                <div className='timeline-icon'>
                  <img src={require('../images/light-icon.png')} />
                </div>
                <div className='timeline-content d-flex'>
                  <strong>2018</strong>
                  <ul>
                    <li>Launched Community Solar</li>
                    <li>Managed 15 community solar farms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />

    </>
  )
}

export default About

