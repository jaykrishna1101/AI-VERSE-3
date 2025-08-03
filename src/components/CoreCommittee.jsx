import React from "react";
import { motion } from "framer-motion";

function CoreCommittee() {
    return (
        <div className="min-h-screen w-full font-sans p-4 sm:p-8 bg-[#4587ca] opacity-90 flex items-center flex-col gap-3 justify-start">
            <h1 className="avenger text-3xl font-extralight text-center mb-12 tracking-wide  text-white">
                Compufest Committee
            </h1>

            <div className="w-[65rem] h-[35rem] overflow-hidden flex items-center justify-center relative">
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "-100%" }}
                    transition={{
                        duration: 50,
                        ease: "linear",
                        repeat: Infinity, // Remove this if you want it only once
                    }}
                    className="w-[45rem] min-h-[35rem] "
                >
                    {/* Put your content inside this box */}
                    <div className="p-4 text-center text-white">
                        <h1 className="avenger text-xl font-extralight text-center mb-1 text-white">
                            <span>Core</span> Committee
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


                         <h1 className="avenger text-xl font-extralight text-center mb-3 mt-40 text-white">
                            <span>Semi Core</span> Committee
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


                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default CoreCommittee;
