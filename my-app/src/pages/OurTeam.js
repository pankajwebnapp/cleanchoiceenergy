import React from 'react'

function OurTeam() {
  return (
    <>
      <div className='container p-tb'>
        <div className='row text-center justify-content-center pb-5'>
          <div className='col-lg-8'>
            <h3>Meet our leadership team</h3>
            <p>The CleanChoice Energy team comes from a diverse range of backgrounds, all united by a passion to make our environment more sustainable and our air cleaner. Together, we apply our unique skills and expertise to the mission of clean energy for all.</p>
          </div>
        </div>
        <div id="gallery-lightbox" className="row" data-toggle="modal" data-target="#teamModal">
          <div className="col-lg-3 col-6">
            <div className='team-inner'>
              <img className="radius-15" src={require('../images/tom.jpg')} data-target="#carouselTeam" data-slide-to="0" />
              <div className='team-info pt-4'>
                <h4>Tom Matzzie</h4>
                <h6 className='font-weight-normal'>Founder & CEO</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className='team-inner'>
              <img className="radius-15" src={require('../images/zoe.jpg')} data-target="#carouselTeam" data-slide-to="1" />
              <div className='team-info pt-4'>
                <h4>Zoë Gamble</h4>
                <h6 className='font-weight-normal'>President</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className='team-inner'>
              <img className="radius-15" src={require('../images/tom.jpg')} data-target="#carouselTeam" data-slide-to="2" />
              <div className='team-info pt-4'>
                <h4>Tom Matzzie</h4>
                <h6 className='font-weight-normal'>Founder & CEO</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className='team-inner'>
              <img className="radius-15" src={require('../images/zoe.jpg')} data-target="#carouselTeam" data-slide-to="3" />
              <div className='team-info pt-4'>
                <h4>Zoë Gamble</h4>
                <h6 className='font-weight-normal'>President</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className='team-inner'>
              <img className="radius-15" src={require('../images/tom.jpg')} data-target="#carouselTeam" data-slide-to="4" />
              <div className='team-info pt-4'>
                <h4>Tom Matzzie</h4>
                <h6 className='font-weight-normal'>Founder & CEO</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className='team-inner'>
              <img className="radius-15" src={require('../images/zoe.jpg')} data-target="#carouselTeam" data-slide-to="5" />
              <div className='team-info pt-4'>
                <h4>Zoë Gamble</h4>
                <h6 className='font-weight-normal'>President</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className='team-inner'>
              <img className="radius-15" src={require('../images/tom.jpg')} data-target="#carouselTeam" data-slide-to="6" />
              <div className='team-info pt-4'>
                <h4>Tom Matzzie</h4>
                <h6 className='font-weight-normal'>Founder & CEO</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className='team-inner'>
              <img className="radius-15" src={require('../images/zoe.jpg')} data-target="#carouselTeam" data-slide-to="7" />
              <div className='team-info pt-4'>
                <h4>Jennifer Spinosi</h4>
                <h6 className='font-weight-normal'>President</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="modal" id="teamModal" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content border-0 radius-15">
              <button type="button" className="popupClosebtn" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body p-0">
                <div id="carouselTeam" className="carousel" data-ride="false">
                  <div className="carousel-item active">
                    <div className='row'>
                      <div className='col-sm-6'>
                        <img className="d-block w-100 teamFull-img" src={require('../images/tom-full.jpg')} />
                      </div>
                      <div className='col-sm-6'>
                        <div className='teamPopup-con'>
                          <h3>Tom Matzzie</h3>
                          <h5 className='mb-5'>Founder & CEO</h5>
                          <p>After spending 15 years helping people get involved in politics through technology, Tom wanted to do something more about climate change. He had a vision to make renewable energy accessible for all, and founded CleanChoice Energy to do just that. When he’s not in the office, you might find Tom out on the Chesapeake Bay with his family.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className='row'>
                      <div className='col-sm-6'>
                        <img className="d-block w-100 teamFull-img" src={require('../images/zoe-full.jpg')} />
                      </div>
                      <div className='col-sm-6'>
                        <div className='teamPopup-con'>
                          <h3>Zoë Gamble</h3>
                          <h5 className='mb-5'>President</h5>
                          <p>Zoë has spent the past 15 years working to make clean energy part of the climate solution.  At CleanChoice, Zoë is leading the company in its next evolution, building out a new fleet of solar projects for our customers. Her vision includes empowering people to innovate and solve hard problems for the good of our planet. In her downtime, she can be found connecting with her family (really a massive tribe!) and pursuing passions of all kinds—yoga, meditation, hiking, and writing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className='row'>
                      <div className='col-sm-6'>
                        <img className="d-block w-100 teamFull-img" src={require('../images/tom-full.jpg')} />
                      </div>
                      <div className='col-sm-6'>
                        <div className='teamPopup-con'>
                          <h3>Tom Matzzie</h3>
                          <h5 className='mb-5'>Founder & CEO</h5>
                          <p>After spending 15 years helping people get involved in politics through technology, Tom wanted to do something more about climate change. He had a vision to make renewable energy accessible for all, and founded CleanChoice Energy to do just that. When he’s not in the office, you might find Tom out on the Chesapeake Bay with his family.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className='row'>
                      <div className='col-sm-6'>
                        <img className="d-block w-100 teamFull-img" src={require('../images/zoe-full.jpg')} />
                      </div>
                      <div className='col-sm-6'>
                        <div className='teamPopup-con'>
                          <h3>Zoë Gamble</h3>
                          <h5 className='mb-5'>President</h5>
                          <p>Zoë has spent the past 15 years working to make clean energy part of the climate solution.  At CleanChoice, Zoë is leading the company in its next evolution, building out a new fleet of solar projects for our customers. Her vision includes empowering people to innovate and solve hard problems for the good of our planet. In her downtime, she can be found connecting with her family (really a massive tribe!) and pursuing passions of all kinds—yoga, meditation, hiking, and writing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className='row'>
                      <div className='col-sm-6'>
                        <img className="d-block w-100 teamFull-img" src={require('../images/tom-full.jpg')} />
                      </div>
                      <div className='col-sm-6'>
                        <div className='teamPopup-con'>
                          <h3>Tom Matzzie</h3>
                          <h5 className='mb-5'>Founder & CEO</h5>
                          <p>After spending 15 years helping people get involved in politics through technology, Tom wanted to do something more about climate change. He had a vision to make renewable energy accessible for all, and founded CleanChoice Energy to do just that. When he’s not in the office, you might find Tom out on the Chesapeake Bay with his family.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className='row'>
                      <div className='col-sm-6'>
                        <img className="d-block w-100 teamFull-img" src={require('../images/zoe-full.jpg')} />
                      </div>
                      <div className='col-sm-6'>
                        <div className='teamPopup-con'>
                          <h3>Zoë Gamble</h3>
                          <h5 className='mb-5'>President</h5>
                          <p>Zoë has spent the past 15 years working to make clean energy part of the climate solution.  At CleanChoice, Zoë is leading the company in its next evolution, building out a new fleet of solar projects for our customers. Her vision includes empowering people to innovate and solve hard problems for the good of our planet. In her downtime, she can be found connecting with her family (really a massive tribe!) and pursuing passions of all kinds—yoga, meditation, hiking, and writing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className='row'>
                      <div className='col-sm-6'>
                        <img className="d-block w-100 teamFull-img" src={require('../images/tom-full.jpg')} />
                      </div>
                      <div className='col-sm-6'>
                        <div className='teamPopup-con'>
                          <h3>Tom Matzzie</h3>
                          <h5 className='mb-5'>Founder & CEO</h5>
                          <p>After spending 15 years helping people get involved in politics through technology, Tom wanted to do something more about climate change. He had a vision to make renewable energy accessible for all, and founded CleanChoice Energy to do just that. When he’s not in the office, you might find Tom out on the Chesapeake Bay with his family.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className='row'>
                      <div className='col-sm-6'>
                        <img className="d-block w-100 teamFull-img" src={require('../images/zoe-full.jpg')} />
                      </div>
                      <div className='col-sm-6'>
                        <div className='teamPopup-con'>
                          <h3>Jennifer Spinosi</h3>
                          <h5 className='mb-5'>President</h5>
                          <p>Zoë has spent the past 15 years working to make clean energy part of the climate solution.  At CleanChoice, Zoë is leading the company in its next evolution, building out a new fleet of solar projects for our customers. Her vision includes empowering people to innovate and solve hard problems for the good of our planet. In her downtime, she can be found connecting with her family (really a massive tribe!) and pursuing passions of all kinds—yoga, meditation, hiking, and writing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-btn-wrap'>
                  <a className="carousel-btn carousel-control-prev" href="#carouselTeam" role="button" data-slide="prev">
                    <i class="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-btn carousel-control-next" href="#carouselTeam" role="button" data-slide="next">
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default OurTeam
