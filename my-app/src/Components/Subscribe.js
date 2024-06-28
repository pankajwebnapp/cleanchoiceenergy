import React from 'react'

function Subscribe() {
  return (
    <div className='container bor-top p-tb subscribe-form'>
        <div className='row justify-content-between m-0'>
          <div className='col-lg-5'>
            <h4 className='text-blue'>Let's keep in touch</h4>
            <h4 className='text-blue'>Unlock special offers, sun-sational content, and more</h4>
          </div>
          <div className='col-lg-6 pt-4'>
            <form>
              <input type='search' name='search' className='form-control' placeholder='Enter your email' />
              <button type='submit' className='btn'>Subscribe</button>
            </form>
            <p>By signing up here, I agree to receive CleanChoice’s email newsletter and special promotional offers.</p>
          </div>
        </div>
      </div>
  )
}

export default Subscribe
