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
      'name': 'Mr. Pritam Chaudhari',
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
      'name': 'Mr. Prathmesh Ghormade',
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

  const compufestCoreCommittee = [
    {
      'name': 'Mr. Lalit Mendhule',
      'role': 'Compufest Head',
      'image': './committee/lalit.png'
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
      'role': 'Decoration Head',
      'image': './committee/sejal_lambat.png'
    },
    {
      'name': 'Mr. Gaurav Naik',
      'role': 'Technical Head',
      'image': './committee/gaurav_naik.png'
    },
    {
      'name': 'Mr. Parth Deshpande',
      'role': 'Sports Head',
      'image': './committee/parth_deshpande.png'
    },
    {
      'name': 'Mr. Tushar Bodhe',
      'role': 'Optimum & Social Media Head',
      'image': './committee/tushar_bodhe.png'
    },
    {
      'name': 'Mr. Prathamesh Ghormade',
      'role': 'EM & HM Head',
      'image': './committee/prathamesh_ghormade.png'
    },
    {
      'name': 'Mr. Ayush Borkar',
      'role': 'Design Head',
      'image': './committee/ayush_borkar.png'
    }
  ];

  const semiCoreCommittee = [
    {
      'name': 'Mr. Aditya Rehpade',
      'role': 'Joint Secretary',
      'image': './committee/aditya_rehpade.png'
    },
    {
      'name': 'Mr. Darshan Bagde',
      'role': 'ACM Vice Chairperson',
      'image': './committee/darshan_bagde.png'
    },
    {
      'name': 'Mr. Aditya Roy',
      'role': 'ACM Secretary',
      'image': './committee/aditya_roy.png'
    },
    {
      'name': 'Mr. Swayam Thakur',
      'role': 'ACM Web Master',
      'image': './committee/swayam_thakur.jpg'
    },
    {
      'name': 'Mr. Pratik Rai',
      'role': 'IEEE Vice Chairperson',
      'image': './committee/pratik_rai.png'
    },
    {
      'name': 'Mr. Archit Gulhane',
      'role': 'IEEE Secretary',
      'image': './committee/archit_gulhane.png'
    },
    {
      'name': 'Mr. Sujit Bopche',
      'role': 'IEEE Web Master',
      'image': './committee/sujit_bopche.png'
    },
    {
      'name': 'Mr. Yashraj Talegaonkar',
      'role': 'Publicity Co-Head',
      'image': './committee/yashraj.png'
    },
    {
      'name': 'Mr. Paras Shingote',
      'role': 'EM Co-Head',
      'image': './committee/paras_shingote.png'
    },
    {
      'name': 'Mr. Neelay Jadhav',
      'role': 'HM Co-Head',
      'image': './committee/neelay_jadhav.png'
    },
    {
      'name': 'Mr. Arth Bhagat',
      'role': 'Sponsorship Co-Head',
      'image': './committee/arth_bhagat.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/mk.png'
    },
    {
      'name': 'Ms. Sakshi Krishnani',
      'role': 'Database Co-Head',
      'image': './committee/sakshi_krishnani.png'
    },
    {
      'name': 'Mr. Ayush Dhole',
      'role': 'Optimum Co-Head',
      'image': './committee/ayush_dhole.png'
    },
    {
      'name': 'Mr. Sujal Jangde',
      'role': 'Optimum Co-Head',
      'image': './committee/sujal_jangde.png'
    },
    {
      'name': 'Ms. Sushmita Khachane',
      'role': 'Literary Co-Head',
      'image': './committee/sushmita.png'
    },
    {
      'name': 'Mr. Yash Nandanwar',
      'role': 'Design Co-Head',
      'image': './committee/yash_nandanwar.png'
    },
    {
      'name': 'Ms. Shailaja Patle',
      'role': 'Technosavvy & Dhyass Co-Head',
      'image': './committee/shailaja_patle.png'
    },
    {
      'name': 'Mr. Hrutik Gujarkar',
      'role': 'Finance Co-Head',
      'image': './committee/hrutik_gujarkar.png'
    }
  ];

  const compufestSemiCoreCommittee = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/kritish_bokde.png'
    },
    {
      'name': 'Mr. Vedant Umate',
      'role': 'Publicity Co-Head',
      'image': './committee/vedant_umate.png'
    },
    {
      'name': 'Mr. Aman Kanoje',
      'role': 'EM Co-Head',
      'image': './committee/aman_tanoje.png'
    },
    {
      'name': 'Mr. Sakshat Keote',
      'role': 'EM Co-Head',
      'image': './committee/sakshat_keote.png'
    },
    {
      'name': 'Ms. Varsha Kolekar',
      'role': 'HM Co-Head',
      'image': './committee/varsha_kolekar.png'
    },
    {
      'name': 'Ms. Ekta Chandak',
      'role': 'Cultural Co-Head',
      'image': './committee/ekta_chandak.png'
    },
    {
      'name': 'Mr. Tanmay Patil',
      'role': 'Database Co-Head',
      'image': './committee/tanmay_patil.png'
    },
    {
      'name': 'Mr. Sujal Jangde',
      'role': 'Optimum Co-Head',
      'image': './committee/sujal_jangde.png'
    },
    {
      'name': 'Ms. Sanskruti Barnase',
      'role': 'Optimum Co-Head',
      'image': './committee/sanskruti_barnasi.png'
    },
    {
      'name': 'Ms. Gauri Joge',
      'role': 'Literary Co-Head',
      'image': './committee/gauri_joge.png'
    },
    {
      'name': 'Ms. Nidhi Pawar',
      'role': 'Design Co-Head',
      'image': './committee/nidhi_pawar.png'
    },
    {
      'name': 'Krishna Mishra',
      'role': 'Sports Co-Head',
      'image': './committee/krishna_mishra.png'
    },
    {
      'name': 'Aniket Mokalkar',
      'role': 'Sports Co-Head',
      'image': './committee/aniket_mokalkar.png'
    }
  ];

  const developedBy = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/kritish_bokde.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/mk.png'
    },
    {
      'name': 'Mr. Gaurav Naik',
      'role': 'Technical Head',
      'image': './committee/gaurav_naik.png'
    }
  ];

  return (
    <>
      <div className='h-screen fixed  w-full '>
        <img src="./bg.png" alt="" className='h-full w-full ' />
      </div>
      <Link to={"/"}>
        <button className=' p-2 bg-white fixed md:top-14 z-[1000] hover:bg-zinc-800  transition-all  hover:text-white left-6 top-5 md:left-20 rounded-2xl  '>
          <IconArrowNarrowLeft />
        </button>
      </Link>
      <div className=' absolute min-h-screen w-full flex items-center justify-start gap-3 flex-col mt-20  z-[99] p-10 '>
        <h1 className='text-center avenger text-white text-5xl '>Team Compufest</h1>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Core Avengers</h1>
        </div>
        <div className='min-h-screen w-full flex gap-3 flex-wrap  justify-center '>
          {coreCommittee.map((member, index) => (
            <div className='h-96 w-80 rounded-2xl bg-zinc-800 flex items-center justify-center flex-col gap-2 opacity-90 overflow-hidden '>
              <span className='text-6xl spider text-white'>  </span>
              <h1 className='text-2xl text-white spider whitespace-nowrap'> {member.role}</h1>
              <div className='relative h-40 w-40 rounded-full overflow-hidden border-2'>
                <div className='absolute w-40 h-40 bg-gray-700 animate-pulse z-10 animation-[pulse_0.4s_ease-in-out_infinite] '></div>
                <img alt='' src={member.image} loading='lazy' className='relative h-full w-full object-cover z-50'></img>
              </div>
              <h3 className='spider text-2xl text-white tracking-widest'>{member.name}</h3>
            </div>
          ))}
        </div>
        <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Compufest Core Avengers</h1>
        </div>
        <div className='min-h-screen w-full flex gap-3 flex-wrap  justify-center '>
          {compufestCoreCommittee.map((member, index) => (
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
        <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Semi-Core Avengers</h1>
        </div>
        <div className='min-h-screen w-full flex gap-3 flex-wrap  justify-center '>
          {semiCoreCommittee.map((member, index) => (
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
        <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Compufest Semi-Core Avengers</h1>
        </div>
        <div className='min-h-screen w-full flex gap-3 flex-wrap  justify-center '>
          {compufestSemiCoreCommittee.map((member, index) => (
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
        <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Developed By</h1>
        </div>
        <div className='h-auto w-full flex gap-3 flex-wrap  justify-center '>
          {developedBy.map((member, index) => (
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