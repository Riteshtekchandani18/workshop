import React from 'react'
import sea from './sea.mp4'

const Sigup = () => {
  return (
    <div className='container-fliud mt-5 vid'>
        <div className='sigup-content d-flex mx-auto flex-column align-items-center w-100'>
            <h4 className='text-light fw-bold mt-5'> Signup for 35% dicount on First trip</h4>
            <h5 className='text-light'>Want to get an instant discount</h5>
            <h5 className='text-light'>for your next favorite destination </h5>
          <input type='text' className='form-control input-field mt-4' placeholder='Enter your email'></input>
          <button type='button'  class="btn btn-outline-danger mt-4">Signup</button>
        </div>
      <video className='video' src={sea} alt='loading' autoPlay loop muted></video>
    </div>
  )
}

export default Sigup
