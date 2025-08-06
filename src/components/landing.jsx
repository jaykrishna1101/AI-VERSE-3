import React from 'react'
import {motion} from "framer-motion"

function LandingHome() {


const text = "Compufest 2K25";

// Variants for the container to stagger children
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Variants for each letter
const letter = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 500 } },
};

  return (
   
    
   <div id='home' className='h-[1400vh] w-full py-40 z-10 relative'>
            <div className='h-10  w-full  mb-10 flex items-center justify-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" className='w-full h-full ' alt="" />
                </div>
              <div className='bebas-neue-regular p-1  z-10 w-full text-6xl md:text-[150px] flex items-center justify-center  shadow-2xl  bg-[#EE232C] text-white  '>
                   <motion.h1
      className="avenger px-4 md:leading-60 leading-40 whitespace-nowrap"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
              </div> 
        <div>
              <div className='h-80 w-[30rem]  top-[40%] left-10 py-10 absolute  '>
                  
                        <h1 className=' text-8xl text-[#e8101b]  avenger  opacity-80 '> <span className='bg-[#E8101B] text-white px-10 py-2  rounded-l-xl rounded-r-xl '> What is</span>   <span className='whitespace-nowrap rounded-r-xl rounded-l-xl bg-[#E8101B] text-white px-10'> compufest ?</span>  </h1>
              </div>

                <div className='h-80 w-[30rem]  top-[43%] right-10 py-10 absolute   '>
                        <h1 className=' text-4xl text-white  avenger leading-12 '> Compufest is the TechFest conducted by the C T - Department of YCCE where TECH and Culture Event Takes Place   </h1>
              </div>
</div>


 
   <div className='h-[600px] absolute top-[85%] w-full p-10 '>
         <div className=' w-[30rem] backdrop-blur-3xl   rounded-2xl  avenger text-3xl p-10 opacity-80' >
              The Department of Computer Technology at YCCE, established in 1985, is accredited and recognized for excellence in education and research. With a focus on AI, IoT, ML, and more, it offers industry-relevant programs and advanced research opportunities. 
         </div>
          <div className=' absolute right-0 h-72 w-[30rem] text-[#e8101b]  avenger text-8xl p-10' >
               Sabse Best <span className='text-white'> compufest ! </span> 
         </div>
   </div>



          </div>


  )
}

export default LandingHome