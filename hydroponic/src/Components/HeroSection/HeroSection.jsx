import React from 'react'
import HomePic from '../../assets/home_pic.png'

export default function HeroSection() {
  return (
    <div>
      <header>
        <div className="bg-image">
            <div className="section-1 flex justify-center items-center flex-col relative z-0">
            <img src={HomePic} alt="Home Page" className='h-screen w-full object-cover ' />
              <div className='absolute text-white flex flex-col justify-center items-center pl-24 pr-24'>
                <h1 className='font-montserrat font-bold text-8xl'>Hydroponics</h1>
                <p className=' text-center font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.</p>
              </div>
            </div>
        </div>
      </header>
    </div>
  )
}
