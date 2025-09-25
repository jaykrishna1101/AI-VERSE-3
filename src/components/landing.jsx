import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

function LandingHome({ suspenseResolved }) {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);


  useEffect(() => {
    if (suspenseResolved) {
      const timer = setTimeout(() => {
        setPlayAnimation(true);
      }, 1600); // matches loader exit (delay 1 + duration 0.6)
      return () => clearTimeout(timer);
    }
  }, [suspenseResolved]);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setShowScrollHint(false);
    } else {
      setShowScrollHint(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const text = "AI Verse 3.0";

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05
      },
    },
  };

  const letter = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 500 } }
  };

  return (
    <div id='home' className='h-[1400vh] w-full py-40 z-10 relative'>
         <motion.div
  animate={{ opacity: showScrollHint ? 1 : 0 }}
  transition={{ duration: 0.5 }}
  className='avenger flex md:hidden fixed   flex-col bottom-2 text-white left-1/2 -translate-x-1/2 text-2xl z-50'
>
  Scroll Down
  <i class="ri-arrow-down-double-fill text-center"></i>
</motion.div>
      <div className="flex items-center justify-center mb-10">
  <img
    src="/Group 1382623402.png"
    className="w-25 h-25"
    alt="AI Logo"
  />
</div>


      <div className='bebas-neue-regular p-1 h-40 md:h-64 z-10 w-full text-6xl md:text-[150px] flex items-center justify-center shadow-2xl bg-[#0c0c0c] text-white'>
        {playAnimation && (
          <motion.h1
            className="avenger font-extralight px-4 md:leading-60 leading-40 whitespace-nowrap"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letter} className="inline-block font-bold">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        )}


          <div className=''>
        <div className='h-80 w-[30rem] scale-75 md:scale-100 -left-20 top-[40%] md:left-10 py-10 absolute  '>
      
          <h1 className=' text-8xl text-[#e8101b]  avenger  opacity-80 '>
            <span className='bg-[#0c0c0c] text-white px-10 py-2  rounded-l-xl rounded-r-xl '> What is</span>
            <span className='whitespace-nowrap rounded-r-xl rounded-l-xl bg-[#0c0c0c] text-white px-10'> Ai verse ?</span>
          </h1>
        </div>
        <div className='h-80 md:w-[32rem] w-full  top-[43%]  px-5 md:px-0 md:right-10 right-0  md:py-10 absolute   '>
          <h1 className=' text-2xl md:text-4xl text-white md:tracking-wide  avenger md:leading-12 '>
            Ai verse is SVPCET's Airtificial inteligence Department annual tech event with competitions, workshops, coding, and gaming, fostering innovation and collaboration.
          </h1>
        </div>
      </div>
      <div className='h-[600px] absolute top-[85%] w-full md:p-10 '>
        <div className=' md:w-[30rem] backdrop-blur-3xl   rounded-2xl  avenger text-3xl p-10 opacity-80' >
         <h1 className='mb-2 text-[#080004] text-3xl text-center '> About SVPCET's AI <span className='ml-2'>Department</span> </h1>
         <h1 className='text-2xl tracking-wide'>
          The Department of Artificial Inteligence at SVPCET, established in 2004, is accredited and recognized for excellence in education and research. With a focus on AI, IoT, ML, and more, it offers industry-relevant programs and advanced research opportunities.
          </h1> 
        </div>
        <div className=' absolute right-0 h-72 md:w-[30rem] text-[#e8101b]  avenger text-7xl md:text-8xl p-10' >
          Racing <span className='text-white'> to the edge of tommorrow.. </span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LandingHome;
