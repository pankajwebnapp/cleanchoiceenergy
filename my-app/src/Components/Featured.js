import React from 'react'

function Featured() {
  return (
    <div className='container p-tb featured bor-top bor-bottom'>
        <h6 className='text-uppercase text-center'>As Featured In</h6>
        <div className='d-flex justify-content-between pt-5' style={{overflowX:"auto"}}>
          <img src={require('../images/the-guardian.png')} />
          <img src={require('../images/washingtonian.png')} />
          <img src={require('../images/smithsonian.png')} />
          <img src={require('../images/washingtonbusinessjournal.png')} />
          <img src={require('../images/axios.png')} />
          <img src={require('../images/NewYorkTimes.png')} />
        </div>
      </div>
  )
}

export default Featured
