import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";





function CoreCommittee() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  const coreCommitteeMembers = [
    'CTSC President: Mr. Om Santoshwar',
    'CTSC Working President: Ms. Gauri Nagpure',
    'CTSC Vice President : Mr. Lalit Mendhule',
    'ACM Chairperson: Mr. Soham Bakane',
    'IEEE Chairperson: Mr. Priyanshu Behere',
    'Cultural Head: Ms. Samiksha Sawant',
    'Cultural Head: Mr. Umang Gotmare',
    'Finance Head & Treasurer: Mr. Shrirang Nadarkhani',
    'Database Head: Ms. Paridhi Nawalkar',
    'Design Head: Ms. Navya Kashimkar',
    'Literary Head: Ms. Harshali Dahariya',
    'Publicity Head: Mr. Pritam Chaudhary', ,
    'Sponsorship Head: Mr. Raj Dhoble',
    'Optimum Head: Mr. Piyush Bhoyar',
    'Event & Hall Management Head: Mr. Prathamesh Ghormade',
    'Technosavy & Dhyass Head: Mr. Smit Pidurkar',
    'Students Representative: Ms. Sejal Lambat',
  ];

  const computfestCommitteeMembers = [
    'Compufest Head: Mr. Lalit Mendhule',
    'Technical Head: Mr. Gaurav Naik',
    'Cultural Head: Ms. Samiksha Sawant',
    'Cultural Head: Mr. Umang Gotmare',
    'Decoration Head: Ms. Sejal Lambat',
    'Sports Head: Mr. Parth Deshpande',
    'Optimum Head & Social Media Head: Mr. Tushar Bodhe',
    'Event & Hall Management Head: Mr. Prathamesh Ghormade',
    'Design Head: Mr. Ayush Borkar'
  ];

  const semiCoreCommitteeMembers = [
    'Joint Secretary: Mrs. Aditya Rehpade',
    'ACM Vice Chairperson: Mr. Darshan Bagde',
    'ACM Secratory: Mr. Aditya Roy',
    'ACM Web Master: Mr. Swayam Thakur',
    'IEEE Vice Chairperson: Mr. Pratik Rai',
    'IEEE Secretary: Mr. Archit Gulhane',
    'IEEE Web Master: Mr. Sujit Bopche',
    'Cultural Co-Head: Mr. Muchkundraje Thote',
    'Publicity Co-Head: Mr. Yashraj Talegaonkar',
    'Event Management Co-Head: Mr. Paras Shingote',
    'Hall Management Co-Head: Mr. Neelay Jadhav',
    'Sponsorship Co-Head: Mr. Arth Bhagat',
    'Database Co-Head: Ms. Sakshi Krishnani',
    'Optimum Co-Head: Mr. Ayush Dhole & Mr. Sujal Jangde',
    'Design Co-Head: Mr. Yash Nandanawar & Mr. Rachit Singh',
    'Technosavy & Dhyass Co-Head: Ms. Shailaja Patle',
    'Finance Co-Head: Mr. Hrutik Gujarkar',
    'Literature Co-Head: Ms. Sushmita Khachane',
  ];

  const semiCoreCompufestCommitteeMembers = [
    'Technical Co-Head: Mr. Kritish Bokde',
    'Publicity Co-Head: Mr. Vedant Umate',
    'Event Management Co-Head: Mr. Aman Kanoje & Mr. Sakshat Keote',
    'Hall Management Co-Head: Mr. Varsha Kolekar',
    'Cultural Co-Head: Ms. Ekta Chandak',
    'Database Co-Head: Mr. Tanmay Patil',
    'Optimum Co-Head: Mr. Sujal Jangde & Ms. Sanskruti Barnase',
    'Literary Co-Head: Ms. Gauri Joge',
    'Design Co-Head: Mr. Nandini Pawar',
    'Sports Co-Head: Mr. Krishna Mishra & Mr. Aniket Mokalkar'
  ];

  return (
    <div className="min-h-screen w-full font-sans p-4 sm:p-8 bg-[#4587ca] opacity-90 flex items-center flex-col gap-3 justify-start">
      <h1 className="avenger text-3xl font-extralight text-center mb-12 tracking-wide  text-white">
        Compufest Committee
      </h1>

      <div ref={scrollRef} className="w-[65rem] h-[80vh] overflow-hidden  flex items-center -mt-3 justify-center relative">
        <motion.div

          initial={{ y: "70%" }}
          animate={{ y: "-66%" }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity, // Remove this if you want it only once
          }}
          className="w-[65rem] "
        >
          {/* Put your content inside this box */}
          <div className="p-4 text-center text-white relative rounded-xl">
            <h1 className="avenger text-2xl font-extralight text-center mb-1 text-white">
              <span>Core</span> Avengers
            </h1>
            <div className=" absolute top-0 right-0 w-60 h-32 -rotate-3  overflow-hidden rounded-xl">
              <img src="/IMG_5092.JPG" alt="" className="h-full w-full object-cover" />
            </div>

            <div className=" absolute top-80 left-0 w-60 h-32 rotate-3 overflow-hidden bg-red-200 rounded-xl">
              <img src="/IMG_5093.JPG" alt="" className="h-full w-full object-cover" />
            </div>
            <div className=" absolute top-160 right-0 w-60 h-32 -rotate-3 overflow-hidden bg-red-200 rounded-xl">
              <img src="/IMG_5104.JPG" alt="" className="h-full w-full object-cover" />
            </div>

            <div className=" absolute top-200 left-0 w-60 h-32 -rotate-3 overflow-hidden bg-red-200 rounded-xl">
              <img src="/IMG_5118.JPG" alt="" className="h-full w-full object-cover" />
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


            <div className=" absolute top-240 right-10 w-40 h-40 rotate-3 rounded-xl">
              <img src="/captain.png" alt="" />
            </div>

  <div className=" absolute top-280 scale-150 left-10 w-40 h-40 rotate-3 rounded-xl">
              <img src="/hulk.png" alt="" />
            </div>


  <div className=" absolute top-320 right-10 w-40 h-40 rotate-3 rounded-xl">
              <img src="/black-panther.png" alt="" />
            </div>


             <div className=" absolute top-360 left-0 w-60 h-32 -rotate-3 overflow-hidden bg-red-200 rounded-xl">
              <img src="" alt="" />
            </div>

             <div className=" absolute top-390 right-10 w-40 h-40 rotate-3 rounded-xl">
              <img src="/wanda.png" alt="" />
            </div>

             <div className=" absolute top-430 scale-100 left-10 w-40 h-40 rotate-3 rounded-xl">
              <img src="/deedpool-wolv.png" alt="" />
            </div>
            
               <div className=" absolute top-500 scale-140 left-10 w-40 h-40 rotate-3 rounded-xl">
              <img src="/Dr_strange.png" alt="" />
            </div>

            <div className=" absolute top-500 right-0 w-48 h-60 -rotate-3 overflow-hidden bg-red-200 rounded-xl">
              <img src="/draredevil.jpeg" alt="" />
            </div>

            {coreCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2  inter md:text-[16px] text-sm">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Compufest</span> Avengers
            </h1>

            {computfestCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}


            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Semi Core</span> Avengers
            </h1>

            {semiCoreCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}


            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Compufest Semi Core</span> Avengers
            </h1>

            {semiCoreCompufestCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

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