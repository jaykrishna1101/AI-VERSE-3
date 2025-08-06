import { IconArrowAutofitDown, IconArrowNarrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Team() {
  return (
    <>
    <div className='h-screen fixed  w-full '>
    <img src="./bg.png" alt="" className='h-full w-full ' />
    </div>
      <Link to={"/"}>
    <button  className=' p-2 bg-white fixed top-14 z-[1000] hover:bg-zinc-800  transition-all  hover:text-white left-20 rounded-2xl  '>
          <IconArrowNarrowLeft/>
    </button>

      </Link>

    <div className=' absolute min-h-screen w-full flex items-center justify-start gap-3 flex-col  z-[99] p-10 '>
             <h1 className='text-center avenger text-white text-5xl '>Team Compufest</h1>
             <div className='  w-80 bg-[#DE0E12] p-3'>
               <h1 className='text-center avenger text-white text-3xl  '>Core Aveneger</h1>
             </div>
             <div className='min-h-screen w-full flex gap-3 flex-wrap  justify-center '>

                <div className='h-96 w-80 rounded-2xl bg-zinc-800 opacity-90'>

                </div>
                    <div className='h-96 w-80 rounded-2xl bg-zinc-800 opacity-90'>

                </div>    <div className='h-96 w-80 rounded-2xl bg-zinc-800 opacity-90'>

                </div>    <div className='h-96 w-80 rounded-2xl bg-zinc-800 opacity-90'>

                </div>    <div className='h-96 w-80 rounded-2xl bg-zinc-800 opacity-90'>

                </div>

             </div>
    </div>
    
    </>
  )
}

export default Team