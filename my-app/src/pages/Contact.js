import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../Components/Form'
function Contact() {
  return (
    <>
      <div className='contact text-center p-tb' style={{ backgroundImage: 'url(' + require('../images/contact-banner.jpg') + ')' }}>
        <div className='container'>
          <h2 className='text-white position-relative'>We’re always here to help.</h2>
        </div>
      </div>

      <div className='container p-tb'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='contact-info p-5 mb-4 mb-md-0'>
              <img src={require('../images/phone-icon.png')} />
              <h4 className='my-4'>Call a representative</h4>
              <Link to="tel:1-800-218-0798" className='btn'>1-800-218-0798</Link>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='contact-info p-5'>
              <img src={require('../images/chat-icon.png')} />
              <h4 className='my-4'>Speak with a representative</h4>
              <Link to="" className='btn'>Chat now</Link>
            </div>
          </div>
        </div>
      </div>

      <Form />

      <div className='container bor-top p-tb'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='text-center'>
              <h3 className='mb-4'>Frequently asked questions</h3>
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
            </div>
            <div className='text-center pt-5'>
              <Link className='btn' to="#">Visit our help center</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container bor-top p-tb'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <div className='text-center'>
              <h3 className='mb-4'>Power outage? Contact your utility</h3>
              <p>If your power is out, please contact your local utility. In the event of an emergency, call 911 immediately. Here are the phone numbers for the utilities where CleanChoice Energy has service.</p>
                <Link to="">View list of utility providers</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container bor-top p-tb'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='text-center'>
              <h3 className='mb-4'>Looking to unsubscribe from our mailing list?</h3>
              <p>If you wish for your home address to be removed from our mailing list, click the link below to send us a request.</p>
                <Link to="">Unsubscribe</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
