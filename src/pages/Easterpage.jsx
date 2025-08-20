import React, { useEffect,useRef } from 'react'
import gsap from "gsap"
import { useNavigate } from 'react-router-dom';

function Easterpage() {
   
  
const titleRef = useRef();
const textRef = useRef();

useEffect(() => {
  gsap.to(titleRef.current, {
    scale:3,
    duration: 2,
    ease: "expo.inOut"
  });

    gsap.to(textRef.current, {
     opacity:1,
    duration: 1.3,
    ease: "elastic.inOut",
    delay:2
  });


}, []);

  
  return (
    <div className='avenger overflow-hidden text-white flex items-center justify-center w-full flex-col gap-10 h-screen bg-neutral-900'>
    
    <h1 ref={titleRef} className=' text-2xl scale-[700]'> <span>A</span></h1>

   <div ref={textRef} className='w-full opacity-0 md:w-3xl h-[75%] md:h-[27rem] rounded-2xl bg-white flex items-center flex-col justify-center gap-3 text-zinc-900'> 
          <h1 className='text-3xl'>You have unlock the Compufest Code  </h1>
          <h1 className='bg-neutral-800 px-10 text-white text-7xl'>4685</h1>
          <h1 className='spider text-2xl text-center'>email the code on the this email : muchkundthote@gamil.com</h1>
          <h1 className='spider text-4xl text-center p-2'>find one of the three guys in  CT Department and say the code </h1>
          <h1 className='text-2xl'>Muchkund Thote</h1>
          <h2 className='text-2xl'>Rachit Singh</h2>
          <h2 className='text-2xl'>Krtish Bokde </h2>
   </div>

    
    </div>
  )
}

export default Easterpage