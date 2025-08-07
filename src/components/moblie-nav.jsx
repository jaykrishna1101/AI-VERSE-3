import { IconCross, IconX } from '@tabler/icons-react'
import React from 'react'

function MoblieNav() {
    return (
        <div className='block md:hidden fixed  z-96 w-full h-[28rem] bg-neutral-900 '>
            <div className='w-full h-20 flex items-center justify-between px-3  pr-17'>
                <div className='h-15 w-15 bg-amber-500 rounded-full'>
                    <img src="/final_logo.png" alt="" />
                </div>
                <div className=' outline-none shadow-2xl -mt-[6px]  backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl backdrop:white-3 p-[7px]'>
                    <IconX />
                </div>

            </div>
                <h1  className='text-xl text-center'>Menu</h1>
            <div className='avenger tracking-wider h-30 w-full flex items-center justify-center flex-col mt-25 gap-2 '>
                <div className='text-2xl'>Home</div>
            
                <div className='text-2xl'>Event</div>
                <div className='text-2xl'>Timeline</div>
                <div className='text-2xl'>Team</div>
                <div className='text-2xl'>Instagram</div>
                <div className='text-2xl'>Credits</div>



            </div>
        </div>
    )
}

export default MoblieNav