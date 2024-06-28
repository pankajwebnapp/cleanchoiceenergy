import React from 'react'

function Search() {
  return (
    <>
       <div className='pt-5 text-center searchCode'>
              <h6 className='text-blue'>Explore what clean energy options are available to you.</h6>
              <div className='hero-from pt-2'>
                <form>
                  <input type='search' name='search' placeholder='Enter your zip code' />
                  <button type='submit'><svg width="18" height="14" viewBox="0 0 18 14" class="inline-block" fill="#1295d8" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.95496H15.5865V8.04408H0V5.95496Z" class="fill-blue-700"></path><path d="M11.2631 14L9.85464 12.5367L15.185 7L9.85464 1.46327L11.2631 0L18 7.00002L11.2631 14Z" class="fill-blue-700"></path></svg></button>
                </form>
              </div>
            </div>
    </>
  )
}

export default Search
