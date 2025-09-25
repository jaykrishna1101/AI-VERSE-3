import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";





function CoreCommittee() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

const coreCommitteeMembers = [
  'Coordinator: Mr. Aryan Rangari',
  'Co-Coordinator: Mr. Om Gawande',
  'Treasurer: Mr. Mihir Dhanore',
  'Event Manager: Ms. Vedanti Chaudhari',
  'Core Member: Ms. Riya Pannase',
  'Core Member: Mr. Kaushik Khodke',
];

const requirementCommitteeMembers = [
  'Head: Mr. Vidhan Bhagat',
  'Co-Head: Mr. Om Deshmukh',
  'Member: Mr. Harsh Meshram',
  'Member: Mr. Aryan Patle',
  'Member: Mr. Sujal Ukunde',
  'Member: Ms. Harshita Balpande',
  'Member: Ms. Shraddha Ninawe',
];

const technicalCommitteeMembers = [
  'Head: Mr. Pranay Shirulkar',
  'Co-Head: Mr. Eklawya Chauhan',
  'Member: Mr. Jaykrishna Khond',
  'Member: Mr. Soham Narvelkar',
];

const mediaCommitteeMembers = [
  'Head: Mr. Rishi Tapase',
  'Co-Head: Mr. Satwik Kamavisdar',
  'Member: Mr. Chetan Sontakke',
  'Member: Ms. Manasvi Dhongle',
];

const documentationCommitteeMembers = [
  'Head: Ms. Maithilee Bansod',
  'Co-Head: Mr. Soham Deshmukh',
  'Member: Mr. Devanshu Balpande',
  'Member: Mr. Tanishq Ambatkar',
];

const decorationCommitteeMembers = [
  'Head: Ms. Gracy Salakha',
  'Co-Head: Ms. Himani Chamele',
  'Member: Ms. Aarya Purohit',
  'Member: Ms. Anisha Dhote',
  'Member: Ms. Minakshi Turkar',
  'Member: Ms. Ruchita Khante',
  'Member: Ms. Vrunda Bhramhe',
  'Member: Ms. Sejal Titarmare',
];

const registrationCommitteeMembers = [
  'Head: Ms. Sayali Kohale',
  'Co-Head: Mr. Yash More',
  'Member: Ms. Nidhi Bharati',
  'Member: Mr. Yash Wavdhane',
];

const promotionCommitteeMembers = [
  'Head: Mr. Ansh Malviya',
  'Co-Head: Ms. Janhavi Chandekar',
  'Member: Ms. Chinamyee Ballal',
  'Member: Mr. Siddhant Rangari',
  'Member: Mr. Nishant Tiwari',
];

const gigaGenCommitteeMembers = [
  'Coordinator: Mr. Kartik Barnala',
  'Co-Coordinator: Ms. Swara Padole',
  'Co-Coordinator: Mr. Prasun Shamkule',
  'Member: Mr. Mayank Charde',
  'Member: Ms. Hardika Kathlewar',
  'Member: Mr. Karan Bhandarkar',
  'Member: Ms. Navinya Urkude',
  'Member: Mr. Aryan Patle',
  'Member: Ms. Shruti Gaikwad',
  'Member: Ms. Arthali Mohod',
];

const webbotixCommitteeMembers = [
  'Coordinator: Ms. Palak Khonde',
  'Co-Coordinator: Mr. Tejas Kumbhare',
  'Co-Coordinator: Mr. Armaan Manwatkar',
  'Documentation: Mr. Athrava Dhande',
  'Decoration: Mr. Jayesh Kumbhare',
  'Media: Mr. Shreyash Tiwari',
  'Registration: Mr. Uzaif Mirza',
  'Promotion: Mr. Supreet Borikar',
];

const mlNeuroNetsCommitteeMembers = [
  'Coordinator: Ms. Riddhi Sontakke',
  'Co-Coordinator: Ms. Prajakta Sambare',
  'Documentation: Mr. Somesh Ninawe',
  'Decoration: Ms. Tanisha Akhre',
  'Media: Ms. Bhumika Barai',
  'Promotion: Mr. Harshad Wadaskar',
  'Registration: Ms. Nayana Dhote',
  'Member: Ms. Vaishnavi Jadhav',
];

const emperorsConquestCommitteeMembers = [
  'Coordinator: Mr. Ayush Nair',
  'Co-Coordinator: Mr. Parth Khairkar',
  'Documentation: Mr. Dipanshu Shende',
  'Decoration: Mr. Devansh Peshne',
  'Media: Ms. Dhruvi Ghodasara',
  'Promotion: Mr. Prince Raja',
  'Registration: Mr. Prathamesh Bhujade',
  'Requirement: Mr. Yug Meshram',
];

const gameOfTradesCommitteeMembers = [
  'Coordinator: Mr. Aditya Menon',
  'Co-Coordinator: Ms. Mayuri Khumbare',
  'Registration: Mr. Tanay Makde',
  'Decoration: Mr. Malleshwar Reddy',
  'Documentation: Mr. Jayesh Bhadange',
  'Promotion: Ms. Besty Kallukaran',
  'Media: Ms. Ekta Wanjari',
  'Member: Mr. Rohan Barkuntwar',
];


  return (
    <div className="min-h-screen w-full font-sans p-4 sm:p-8 bg-[#4587ca] opacity-90 flex items-center flex-col gap-3 justify-start">
      <h1 className="avenger text-3xl font-extralight text-center mb-12 tracking-wide  text-white">
        AI Verse 3.0 Committee
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
            
            <div className=" absolute top-10 right-10 w-60 h-60 -rotate-3  overflow-hidden rounded-xl">
              <img src="f114.png" alt="" className="h-full w-full object-cover" />
            </div>

            <div className=" absolute top-80 scale-65 left-0 w-60 h-32 rotate-3 rounded-xl">
              <img src="f112 (1).png" alt="" className="h-full w-full object-cover" />
            </div>
            <div className=" absolute top-160 right-0 w-60 h-32 -rotate-3 overflow-hidden bg-red-200 rounded-xl">
              <img src="f1s2 (1).png" alt="" className="h-full w-full object-cover" />
            </div>

            <div className=" absolute top-200 left-0 w-60 h-32 -rotate-3 overflow-hidden bg-gray-100 rounded-xl">
              <img src="f115.png" alt="" className="h-full w-full object-cover" />
            </div>


            <div className=" absolute top-15 left-0 w-40 h-40 scale-150 rotate-3 rounded-xl">
              <img src="f1d3.png" alt="" />
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
              <img src="f19.png" alt="" />
            </motion.div>


            <div className=" absolute top-140 scale-120 left-10 w-40 h-25 rotate-3 overflow-hidden bg-orange-200 rounded-xl">
              <img src="f113.png" alt="" />
            </div>


            <div className=" absolute top-240 right-10 scale-150 w-40 h-40 rotate-3 rounded-xl">
              <img src="f1r11 (1).png" alt="" />
            </div>

            <div className=" absolute top-280 scale-110 left-10 w-40 h-40 rotate-3 rounded-xl">
              <img src="f1d2.png" alt="" />
            </div>


            <div className=" absolute top-320 scale-200 right-20 w-40 h-40 rotate-3 rounded-xl">
              <img src="f1oracle.png" alt="" />
            </div>

             <div className=" absolute top-360 left-10 w-38 h-32 scale-150 -rotate-3 rounded-xl">
              <img src="f1s5 (1).png" alt="" />
            </div>

            <div className=" absolute top-390 right-10 w-40 h-20 scale-150 overflow-hidden bg-red-200 rotate-3 rounded-xl">
              <img src="f1petronas.webp" alt="" />
            </div>

            <div className=" absolute top-430 scale-150 left-10 w-40 h-40 rotate-3 rounded-xl">
              <img src="f1.png" alt="" />
            </div>

            <div className=" absolute top-540 scale-200 left-10 w-40 h-40 rotate-3 rounded-xl">
              <img src="f1r8 (1).png" alt="" />
            </div>

            <div className=" absolute top-560 right-20 scale-100 -rotate-3 right-10 w-40 h-40 overflow-hidden bg-gray-100 rounded-xl">
              <img src="f1d4.png" alt="" />
            </div>

            {/* Extra stickers for lower teams */}
            <div className="absolute top-640 scale-120 left-10 w-44 h-20 rotate-3 overflow-hidden bg-red-200 rounded-xl">
              <img src="f1bw.png" alt="" />
            </div>

            <div className="absolute top-680 right-10 w-44 h-30 -rotate-3 overflow-hidden bg-black rounded-xl">
              <img src="f1d5.jpg" alt="" />
            </div>

            <div className="absolute top-720 left-10 scale-120 w-40 h-20 rotate-3 overflow-hidden bg-red-200 rounded-xl">
              <img src="f1l4 (1).png" alt="" />
            </div>

            <div className="absolute top-760 right-10 w-48 h-48 scale-120 overflow-hidden rounded-xl">
              <img src="f1s4 (1).png" alt="" />
            </div>

            <div className="absolute top-800 left-10 w-44 h-26 scale-120 -rotate-3 overflow-hidden bg-gray-100 rounded-xl">
              <img src="f1d8.png" alt="" />
            </div>

            <div className="absolute top-840 scale-120 right-10 w-48 h-24 rotate-3 overflow-hidden rounded-xl">
              <img src="f1haas.jpeg" alt="" />
            </div>

            <div className="absolute top-880 scale-130 left-10 w-44 h-44 rotate-3 overflow-hidden rounded-xl">
              <img src="f1s1 (1).png" alt="" />
            </div>

            <div className="absolute top-920 right-10 w-44 h-30 -rotate-3 scale-130 overflow-hidden rounded-xl">
              <img src="f1s6.png" alt="" />
            </div>

            <div className="absolute top-960 left-10 w-40 h-25 rotate-3 overflow-hidden rounded-xl">
              <img src="f1d6.jpg" alt="" />
            </div>

            <div className="absolute top-1000 scale-150 right-10 w-48 h-48 rotate-3  overflow-hidden rounded-xl">
              <img src="f13 (1).png" alt="" />
            </div>

            <div className="absolute top-1040 scale-120 left-10 w-44 h-20 -rotate-3 overflow-hidden rounded-xl">
              <img src="f1mcl38.jpeg" alt="" />
            </div>

            <div className="absolute top-1080 right-10 w-48 h-48 rotate-3 overflow-hidden rounded-xl">
              <img src="f1c1 (1).png" alt="" />
            </div>

            <div className="absolute top-1120 left-10 w-44 h-44 rotate-3 overflow-hidden rounded-xl">
              <img src="f1s3.png" alt="" />
            </div>

            <div className="absolute top-1160 scale-120 right-10 w-44 h-20 overflow-hidden -rotate-3 rounded-xl">
              <img src="f1yuki.jpg" alt="" />
            </div>

            <div className="absolute  top-1200 scale-120 left-10 w-40 h-20 rotate-3 overflow-hidden rounded-xl">
              <img src="f1d7.jpg" alt="" />
            </div>

            <div className="absolute top-1240 right-0 w-48 h-31 rotate-3 overflow-hidden bg-red-200 rounded-xl">
              <img src="f115.png" alt="" />
            </div>


            <h1 className="avenger text-2xl font-extralight text-center mb-1 text-white">
              <span>Core</span> Team
            </h1>

            {coreCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter md:text-[16px] text-sm">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Requirement</span> Team
            </h1>

            {requirementCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Technical</span> Team
            </h1>

            {technicalCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Media</span> Team
            </h1>

            {mediaCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Documentation</span> Team
            </h1>

            {documentationCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Decoration</span> Team
            </h1>

            {decorationCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Registration</span> Team
            </h1>

            {registrationCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Promotion</span> Team
            </h1>

            {promotionCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>GigaGen</span> Avengers
            </h1>

            {gigaGenCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>WebBotix</span> Avengers
            </h1>

            {webbotixCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>ML NeuroNets</span> Avengers
            </h1>

            {mlNeuroNetsCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Emperor’s Conquest</span> Avengers
            </h1>

            {emperorsConquestCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}

            <h1 className="avenger text-2xl font-extralight text-center mb-3 mt-40 text-white">
              <span>Game of Trades</span> Avengers
            </h1>

            {gameOfTradesCommitteeMembers.map((val, index) => (
              <p key={index} className="mb-2 inter">{val}</p>
            ))}


            <h1 className="avenger mt-4 text-2xl">
              --- The END ---
            </h1>
            <div className="w-full h-40 flex items-center justify-center">

              <div className=" w-35 h-35  mt-5 rounded-xl">
                <img src="f1logo.jpg" alt="" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CoreCommittee;