import { IconArrowAutofitDown, IconArrowNarrowLeft } from '@tabler/icons-react'
import { m } from 'motion/react';
import React from 'react'
import { Link } from 'react-router-dom'

function Team() {
  
  const coreCommittee = [
    {
      'name': 'Mr. Om Santoshwar',
      'role': 'CTSC President',
      'image': './committee/om_santoshwar.png'
    },
    {
      'name': 'Ms. Gauri Nagpure',
      'role': 'CTSC Working President',
      'image': './committee/gauri_nagpure.png'
    },
    {
      'name': 'Mr. Lalit Mendhule',
      'role': 'CTSC Vice President',
      'image': './committee/lalit.png'
    },
    {
      'name': 'Mr. Soham Bakane',
      'role': 'ACM Chairperson',
      'image': './committee/soham_bakane.png'
    },
    {
      'name': 'Mr. Priyanshu Behere',
      'role': 'IEEE Chairperson',
      'image': './committee/priyanshu_behere.png'
    },
    {
      'name': 'Mr. Shrirang Nadarkhani',
      'role': 'Finance Head & Treasurer',
      'image': './committee/shrirang_nadarkhane.png'
    },
    {
      'name': 'Ms. Paridhi Nawalkar',
      'role': 'Database Head',
      'image': './committee/paridhi_nawalkar.png'
    },
    {
      'name': 'Ms. Navya Kashimkar',
      'role': 'Design Head',
      'image': './committee/navya_kashimkar.png'
    },
    {
      'name': 'Ms. Harshali Dahariya',
      'role': 'Literary Head',
      'image': './committee/harshali_dahariya.png'
    },
    {
      'name': 'Mr. Pritam Chaudhary',
      'role': 'Publicity Head',
      'image': './committee/pritam_chaudhary.png'
    },
    {
      'name': 'Mr. Raj Dhoble',
      'role': 'Sponsorship Head',
      'image': './committee/raj_dhoble.png'
    },
    {
      'name': 'Mr. Piyush Bhoyar',
      'role': 'Optimum Head',
      'image': './committee/piyush_bhoyar.png'
    },
    {
      'name': 'Mr. Prathamesh Ghormade',
      'role': 'EM & HM Head',
      'image': './committee/prathamesh_ghormade.png'
    },
    {
      'name': 'Mr. Smit Pidurkar',
      'role': 'Technosavvy & Dhyass Head',
      'image': './committee/smit.jpeg'
    },
    {
      'name': 'Ms. Samiksha Sawant',
      'role': 'Cultural Head',
      'image': './committee/samiksha_sawant.png'
    },
    {
      'name': 'Mr. Umang Gotmare',
      'role': 'Cultural Head',
      'image': './committee/umang_gotmare.png'
    },
    {
      'name': 'Ms. Sejal Lambat',
      'role': 'Students Representative',
      'image': './committee/sejal_lambat.png'
    }
  ];

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
        
              {coreCommittee.map((member,index)=>(

                <div className='h-96 w-80 rounded-2xl bg-zinc-800 flex items-center justify-center flex-col gap-2 opacity-90 overflow-hidden '>
                
                <span className='text-6xl spider text-white'>  </span>
                <h1 className='text-2xl text-white spider whitespace-nowrap'> {member.role}</h1>
                  <div className='h-40 w-40 rounded-full overflow-hidden border-2'>
                  <img alt='' src={member.image} className='h-full w-full object-cover'></img>
                  </div>
                  <h3 className='spider text-2xl text-white tracking-widest'>{member.name}</h3>
                </div>


              ))}
             </div>
    </div>
    </>
  )
}

export default Team