import React from 'react'
import Box from './Box'
import section1_img from '../../assets/section1_img.png'

export default function Section1() {
  return (
    <>
       <div className="container p-20">
        <div className='font-montserrat'>
            <h1 className='font-bold text-4xl'>Caring For Your <span className='text-green-600'>Private</span> <br /><span className='text-green-600'>Plants</span>, Our Expertise</h1>
            <p className='pt-3 w-1/2'>"Nurturing Your Green Haven: Where Your Private Plants Blossom, Our Expertise Blooms. Cultivating Care, Expertly Tailored for Your Personal Organic Oasis."</p>
        </div>
        <div className="pt-5 grid grid-cols-2">
            <Box/>
        </div>
       </div>
    </>
  )
}
