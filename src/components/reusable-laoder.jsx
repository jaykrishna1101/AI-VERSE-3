import React from 'react'

function ReusableLaoder({LoadingDone , setLoadingDone}) {
  return (
    <div className='h-screen w-full bg-[#EE232C] fixed z-50 top-0 flex items-center justify-center '>          
              <h1 className='text-2xl text-white avenger'> {LoadingDone}</h1>
    </div>
  )
}

export default ReusableLaoder