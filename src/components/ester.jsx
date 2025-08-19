import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { div } from 'motion/react-client';

function Easter({ suspenseResolved }) {
  

  return (
          <motion.div
           initial={{scale:0}}
           animate={{scale:1 ,rotate:360}}
          className=' top-1/2 left-1/2 rounded-2xl   -translate-x-1/2 z-50 bg-neutral-800 -translate-y-1/2 fixed h-96 w-[28rem] '>
                <h1 className='text-center mt-12 text-3xl '>
                 Peek into the Multiverse
                </h1>

                  <h1 className='text-center mt-16 text-9xl '>
               A
                 </h1>
                <div className='w-full flex items-center justify-center mt-10'>
                    
                <button className='avenger tracking-wider px-3 hover:p-3 hover:text-white hover:bg-black hover:scale-105 transition-all hover:text-2xl py-1 bg-white text-black rounded '>Enter the Multiverse </button>
                   <i class="ri-arrow-right-long-line"></i>
                    </div>    

          </motion.div>
  );
}

export default Easter;
