import React from 'react'
import boxDetails from './boxDetails'

export default function Box() {
    return (
        <>
        {
            boxDetails.map(i=>{
                return(
                    <div className=''>
                        <div className="miss border-solid border-1 border-gray-600 rounded-md w-96 font-regular p-5 mt-5 outline-none shadow-2xl">
                            <img src={i.img} alt="mission" className='w-5' />
                            <label className='text-xl font-semibold'>Our <span className='text-green-600'>{i.title}</span></label>
                            <p className='text-sm'>{i.desc}</p>
                        </div>
                    </div>
                )
            })
        }
        </>
  )
}
