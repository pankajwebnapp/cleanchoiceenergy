import React from 'react'
import { Link } from 'react-router-dom'
import Testimonial from '../Components/Testimonial'

function Careers() {
    return (
        <>
            <div className='hero p-tb'>
                <div className='container'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-8'>
                            <h1 className='mb-3'>Careers</h1>
                            <p>Join the CleanChoice Energy team and discover the rewards of a career that helps make the world a cleaner—and better—place.</p>
                        </div>
                        <div className='col-md-12 pt-5'>
                            <img className='w-100' src={require('../images/team-banner.jpg')} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container bor-top p-tb text-center'>
                <h3 className='mb-5'>Why we love working here</h3>
                <div className='row justify-content-center'>
                    <div className='col-lg-3 col-md-6 pb-lg-0 pb-5'>
                        <img src={require('../images/robust-benefits.png')} />
                        <h5 className='my-4'>Robust benefits</h5>
                        <p>We offer extensive medical, dental, and vision benefits, including options that are 100% employer paid, as well as generous 401k contributions and paid family leave.</p>
                    </div>
                    <div className='col-lg-3 col-md-6 pb-lg-0 pb-5'>
                        <img src={require('../images/robust-benefits.png')} />
                        <h5 className='my-4'>Flexibility</h5>
                        <p>Whether you prefer to work remotely or from our beautiful DC office, you’ll enjoy great work/life balance.</p>
                    </div>
                    <div className='col-lg-3 col-md-6 pb-md-0 pb-5'>
                        <img src={require('../images/robust-benefits.png')} />
                        <h5 className='my-4'>Diverse team</h5>
                        <p>Our diverse and inclusive work environment fosters innovation and collaboration throughout our team.</p>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <img src={require('../images/robust-benefits.png')} />
                        <h5 className='my-4'>Greater purpose</h5>
                        <p>There's no better feeling than working for a company that's committed to caring for our customers, our people, and the planet.</p>
                    </div>
                </div>
            </div>

            <div className='container bor-top p-tb'>
                <h2 className='mb-5 px-md-5 text-center'>Be a part of our mission-driven culture</h2>
                <div className='row justify-content-end align-items-center'>
                    <div className='col-lg-5 col-md-6 text-md-left text-center'>
                        <p>Work alongside experts in clean energy, marketing, product, data, technology, entrepreneurship, and other fields to help bring clean energy to everyone, everywhere. And while a job at CleanChoice Energy comes with excitement, challenges, and growth opportunities, it also comes with something more important: the feeling that you're working hard to change the world. After all, we're in this together.</p>
                        <Link to="">Learn more about CleanChoice</Link>
                    </div>
                    <div className='col-lg-5 col-md-6  text-md-right text-center pt-md-0 pt-5'>
                        <img className='radius-15' src={require('../images/our-products.jpg')} />
                    </div>

                </div>
            </div>

            <Testimonial />

            <div className='hero p-tb bor-top'>
                <div className='container'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-8'>
                            <h1 className='mb-3'>Why we’re proud to work here</h1>
                        </div>
                        <div className='col-md-12 pt-5'>
                            <video controls autoPlay muted>
                                <source src='/Video/video.mp4' />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Careers
