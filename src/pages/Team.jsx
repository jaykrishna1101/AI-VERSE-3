import { IconArrowAutofitDown, IconArrowNarrowLeft } from '@tabler/icons-react'
import { m } from 'motion/react';
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';

function Team() {

  const coreCommittee = [
    {
      'name': 'Mr. Aryan Rangari',
      'role': 'Coordinator',
      'image': './committee/aryan_rangari.png'
    },
    {
      'name': 'Ms. Gauri Nagpure',
      'role': 'Co-Coordinator ',
      'image': './committee/om_gawande.png'
    },
    {
      'name': 'Mr. Lalit Mendhule',
      'role': 'CTSC Vice President',
      'image': './committee/mihir_dhanore.png'
    },
    {
      'name': 'Mr. Soham Bakane',
      'role': 'ACM Chairperson',
      'image': './committee/vedanti_chaudhari.png'
    },
  ];

  const compufestCoreCommittee = [
    {
      'name': 'Mr. Lalit Mendhule',
      'role': 'Compufest Head',
      'image': './committee/rishi_tapase.png'
    },
    {
      'name': 'Ms. Samiksha Sawant',
      'role': 'Cultural Head',
      'image': './committee/satviik_kamavisdar.png'
    },
  ];

  const semiCoreCommittee = [
    {
      'name': 'Mr. Aditya Rehpade',
      'role': 'Joint Secretary',
      'image': './committee/pranay_shirulkar.png'
    },
    {
      'name': 'Mr. Darshan Bagde',
      'role': 'ACM Vice Chairperson',
      'image': './committee/eklawaya_chauhan.png'
    },
  ];

  const compufestSemiCoreCommittee = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/maithilee_bansod.png'
    },
    {
      'name': 'Mr. Vedant Umate',
      'role': 'Publicity Co-Head',
      'image': './committee/soham_deshmukh.png'
    },
  ];

  const developedBy = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/gracy_shalakha.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/himani_chamele.png'
    },
  ];

  const registrationTeam = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/sayali_kohle.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/yash_more.png'
    },
  ];

  const promotionTeam = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/ansh_malvia.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/janhavi_chanderkar.png'
    },
  ];

  const requirementTeam = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/vidhan_bhagat.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/om_deshmukh.png'
    },
  ];

  const gigagenTeam = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/kartikrao_barnala.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/swara_padole.png'
    },
    {
      'name': 'Mr. Gaurav Naik',
      'role': 'Technical Head',
      'image': './committee/prasun_shamkule.png'
    }
  ];

  const webbotixTeam = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/palak_khonde.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/tejas_kumbhare.png'
    },
    {
      'name': 'Mr. Gaurav Naik',
      'role': 'Technical Head',
      'image': './committee/armaan_manwatkar.png'
    }
  ];

  const gotTeam = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/aditya_menon.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/mayuri_kumbhare.png'
    },
  ];

  const emporersTeam = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/ayush_nair.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/parth_khairkar.png'
    },
  ];

  const mlTeam = [
    {
      'name': 'Mr. Kritish Bokde',
      'role': 'Technical Co-Head',
      'image': './committee/riddhi_sontakke.png'
    },
    {
      'name': 'Mr. Muchkundraje Thote',
      'role': 'Cultural Co-Head',
      'image': './committee/prajakta_sambare.png'
    },
  ];

  return (
    <>
      <div className='h-screen fixed  w-full '>
        <img src="https://c4.wallpaperflare.com/wallpaper/988/430/375/sauber-c36-formula-1-f1-cars-2018-wallpaper-preview.jpg" alt="" className='h-full w-full ' />
      </div>
      <Link to={"/"}>
        <button className=' p-2 bg-white fixed md:top-14 z-[1000] hover:bg-zinc-800  transition-all  hover:text-white left-6 top-5 md:left-20 rounded-2xl  '>
          <IconArrowNarrowLeft />
        </button>
      </Link>
      <div className=' absolute min-h-screen w-full flex items-center justify-start gap-3 flex-col mt-20  z-[99] p-10 '>
        <h1 className='text-center avenger text-white text-5xl '>Team AI verse 3.0</h1>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Core Team</h1>
        </div>
        <div className='min-h-[550px] w-full flex gap-3 flex-wrap  justify-center '>
          {coreCommittee.map((member, index) => (
            // <div className='h-96 w-80 rounded-2xl bg-zinc-800 flex items-center justify-center flex-col gap-2 opacity-90 overflow-hidden '>
            //   <span className='text-6xl spider text-white'>  </span>
            //   <h1 className='text-2xl text-white spider whitespace-nowrap'> {member.role}</h1>
              <div className='relative h-120 w-90 rounded-2xl opacity-95 overflow-hidden border-2'>
                <div className='absolute h-120 w-90 bg-gray-700 animate-pulse z-10 animation-[pulse_0.4s_ease-in-out_infinite] '></div>
                <img alt='' src={member.image} loading='lazy' className='relative h-full w-full object-cover z-50'></img>
              </div>
            //   <h3 className='spider text-2xl text-white tracking-widest'>{member.name}</h3>
            // </div>
          ))}
        </div>
        {/* <div className='h-10' >
        </div> */}
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Media Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {compufestCoreCommittee.map((member, index) => (
            // <div className='h-96 w-80 rounded-2xl bg-zinc-800 flex items-center justify-center flex-col gap-2 opacity-90 overflow-hidden '>
            //   <span className='text-6xl spider text-white'>  </span>
            //   <h1 className='text-2xl text-white spider whitespace-nowrap'> {member.role}</h1>
              <div className='h-120 w-90 opacity-95 rounded-2xl overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
        //       <h3 className='spider text-2xl text-white tracking-widest'>{member.name}</h3>
        //     </div>
          ))}
        </div>
        <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Technical Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {semiCoreCommittee.map((member, index) => (
            // <div className='h-96 w-80 rounded-2xl bg-zinc-800 flex items-center justify-center flex-col gap-2 opacity-90 overflow-hidden '>
            //   <span className='text-6xl spider text-white'>  </span>
            //   <h1 className='text-2xl text-white spider whitespace-nowrap'> {member.role}</h1>
              <div className='h-120 w-90 opacity-95 rounded-2xl overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
            //   <h3 className='spider text-2xl text-white tracking-widest'>{member.name}</h3>
            // </div>
          ))}
        </div>
        <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Documentation Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {compufestSemiCoreCommittee.map((member, index) => (
            // <div className='h-96 w-80 rounded-2xl bg-zinc-800 flex items-center justify-center flex-col gap-2 opacity-90 overflow-hidden '>
            //   <span className='text-6xl spider text-white'>  </span>
            //   <h1 className='text-2xl text-white spider whitespace-nowrap'> {member.role}</h1>
              <div className='h-120 w-90 rounded-2xl opacity-95 overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
            //   {/* <h3 className='spider text-2xl text-white tracking-widest'>{member.name}</h3>
            // </div> */}
          ))}
        </div>
        <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Decoration Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {developedBy.map((member, index) => (
            // <div className='h-96 w-80 rounded-2xl bg-zinc-800 flex items-center justify-center flex-col gap-2 opacity-90 overflow-hidden '>
            //   <span className='text-6xl spider text-white'>  </span>
            //   <h1 className='text-2xl text-white spider whitespace-nowrap'> {member.role}</h1>
              <div className='h-120 w-90 rounded-2xl opacity-95 overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
            //   <h3 className='spider text-2xl text-white tracking-widest'>{member.name}</h3>
            // </div>
          ))}
        </div>
        <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Registration Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {registrationTeam.map((member, index) => (
              <div className='h-120 w-90 opacity-95 rounded-2xl overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
          ))}
        </div>
                <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Promotion Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {promotionTeam.map((member, index) => (
              <div className='h-120 w-90 opacity-95 rounded-2xl overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
          ))}
        </div>
                <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Requirement Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {requirementTeam.map((member, index) => (
              <div className='h-120 w-90 opacity-95 rounded-2xl overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
          ))}
        </div>
                <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Giga Gen Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {gigagenTeam.map((member, index) => (
              <div className='h-120 w-90 opacity-95 rounded-2xl overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
          ))}
        </div>
                <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Webbotix Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {webbotixTeam.map((member, index) => (
              <div className='h-120 w-90 opacity-95 rounded-2xl overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
          ))}
        </div>
                <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Game of Trades Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {gotTeam.map((member, index) => (
              <div className='h-120 w-90 opacity-95 rounded-2xl overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
          ))}
        </div>
                <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>Emporers Conquest Team</h1>
        </div>
        <div className='min-h-[500px] w-full flex gap-3 flex-wrap  justify-center '>
          {emporersTeam.map((member, index) => (
              <div className='h-120 w-90 opacity-95 rounded-2xl overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
          ))}
        </div>
        <div className='h-10' >
        </div>
        <div className='  w-80 bg-[#DE0E12] p-3'>
          <h1 className='text-center avenger text-white text-3xl  '>ML Neuronets Team</h1>
        </div>
        <div className='min-h-[1200px] w-full flex gap-3 flex-wrap  justify-center '>
          {mlTeam.map((member, index) => (
              <div className='h-120 w-90 opacity-95 rounded-2xl overflow-hidden border-2'>
                <img alt='' src={member.image} className='h-full w-full object-cover'></img>
              </div>
          ))}
        </div>
      </div> 
    </>
  )
}

export default Team