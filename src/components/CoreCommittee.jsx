import React,{useRef} from "react";
import { motion, useInView } from "framer-motion";


function CoreCommittee() {
  const scrollRef = useRef(null);
    const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

    return (
        <div className="min-h-screen w-full font-sans p-4 sm:p-8 bg-[#4587ca] opacity-90 flex items-center flex-col gap-3 justify-start">
            <h1 className="avenger text-3xl font-extralight text-center mb-12 tracking-wide  text-white">
                Compufest Committee
            </h1>

            <div className="w-[65rem] h-[35rem] overflow-hidden flex items-center justify-center relative">
                <motion.div
                     ref={scrollRef}
                    initial={{ y: "80%" }}
                    animate={{ y: "-100%" }}
                    transition={{
                        duration: 50,
                        ease: "linear",
                        repeat: Infinity, // Remove this if you want it only once
                    }}
                    className="w-[60rem] min-h-[35rem] "
                >
                    {/* Put your content inside this box */}
                    <div className="p-4 text-center text-white relative rounded-xl">
                        <h1 className="avenger text-2xl font-extralight text-center mb-1 text-white">
                            <span>Core</span> Avengers
                        </h1>
                        <div className=" absolute top-0 right-0 w-60 h-32 -rotate-3 bg-red-200 rounded-xl">

                        </div>

                         <div className=" absolute top-80 left-0 w-60 h-32 rotate-3 bg-red-200 rounded-xl">

                        </div>
                        <div className=" absolute top-160 right-0 w-60 h-32 -rotate-3 bg-red-200 rounded-xl">

                        </div>

                        <div className=" absolute top-200 left-0 w-60 h-32 -rotate-3 bg-red-200 rounded-xl">

                        </div>

                        
                        <div className=" absolute top-15 left-0 w-40 h-40 rotate-3 rounded-xl">
                                      <img src="spider-man-sticker.png" alt="" />
                        </div>

                       <motion.div
  initial={{ rotate: 10 }}
  animate={{ rotate: -10 }}
  transition={{
    duration: 0.4,       
    ease: "easeInOut", 
    repeat: Infinity,
    repeatType: "reverse", // Important for back-and-forth motion
  }}
  className="absolute top-80 right-0 w-40 h-40 rounded-xl"
>
  <img src="gautlent.png" alt="" />
</motion.div>


                         <div className=" absolute top-140 left-0 w-40 h-40 rotate-3 rounded-xl">
                                      <img src="iron_man.png" alt="" />
                        </div>


                           <div className=" absolute top-240 right-0 w-40 h-40 rotate-3 rounded-xl">
                                      <img src="/captain.png" alt="" />
                        </div>


                        <p className="mb-2 inter">President: John Doe</p>
                        <p className="mb-2 inter">Vice President: Jane Smith</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p> 
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                             <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                               <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                                 <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                                   <p className="mb-2 inter">General Secretary: Alex Johnson</p>


                         <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
                            <span>Semi Core</span> Avengers
                        </h1>
                        <p className="mb-2 inter">President: John Doe</p>
                        <p className="mb-2 inter">Vice President: Jane Smith</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>
                        <p className="mb-2 inter">General Secretary: Alex Johnson</p>

      <h1 className="avenger mt-4 text-2xl">
              --- The END ---
      </h1>
 <div className="w-full h-40 flex items-center justify-center">

  <div className=" w-50 h-50  mt-5 rounded-xl">
                                      <img src="marvel-logo.png" alt="" />
                        </div>

 </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default CoreCommittee;
