import React from 'react'
import gif from './gif1.gif'

const About = () => {
  return (
    <div className='container mt-.5 mb-5'>
        <div className="card ">
            <div className="row">
                <div className="col-md-5">
                    <img src={gif} alt="gif img" className='w-100' />
                </div>
                <div className="col-md-7 mt-4">
                 <h4 className='text-center head'><b>About us</b></h4>
                 <p className='p-4 para'>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quod aperiam assumenda voluptatibus provident repudiandae iste. Nostrum earum quos totam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias aliquam debitis dignissimos minima repellendus, voluptatibus consequatur blanditiis recusandae ullam dolore iusto beatae eligendi delectus deserunt quas perspiciatis voluptates labore quam repudiandae! Odio quidem, debitis necessitatibus eveniet ab commodi quasi cum? Impedit quibusdam unde repellendus ratione minima natus vitae veritatis cum!</p>
                 <button>Learn more</button>
                </div>
            </div>
        </div>
        </div>
  )
}

export default About
