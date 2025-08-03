// App.jsx
import React, { useEffect, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from './components/model';
import SetBackground from './components/BG'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
<<<<<<< HEAD
import { Suspense } from 'react';
import Loader from "./lib/utils/Loader"


import * as THREE from 'three';
import Event from './components/Event';
import './App.css';
import CoreCommittee from './components/CoreCommittee';
import { useLenis } from './lib/utils/lenis';
=======
import * as THREE from 'three';
import Event from './components/Event';
import './App.css';
import OurSponsors from './components/OurSponsors';
>>>>>>> cea08c6cb26210355075682cf389ff21112fe284

function ScrollCamera({ cameraPositions }) {
  const { camera } = useThree();
  const [scrollPercent, setScrollPercent] = useState(0);
  const targetPosition = useRef(new THREE.Vector3());
  const lerpSpeed = 0.1;

<<<<<<< HEAD


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    for (let i = 0; i < cameraPositions.length - 1; i++) {
      const current = cameraPositions[i];
      const next = cameraPositions[i + 1];

=======
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    for (let i = 0; i < cameraPositions.length - 1; i++) {
      const current = cameraPositions[i];
      const next = cameraPositions[i + 1];

>>>>>>> cea08c6cb26210355075682cf389ff21112fe284
      if (scrollPercent >= current.scroll && scrollPercent <= next.scroll) {
        const t = (scrollPercent - current.scroll) / (next.scroll - current.scroll);
        const interpolated = new THREE.Vector3().fromArray(current.position).lerp(
          new THREE.Vector3().fromArray(next.position),
          t
        );
        targetPosition.current.copy(interpolated);
        break;
      }
    }

    // Smoothly interpolate camera position toward target
    camera.position.lerp(targetPosition.current, lerpSpeed);
    camera.lookAt(0, 0, 0);
  });

  return null;
}



export default function App() {

  useLenis()

  const cameraPositions = [
    { scroll: 0, position: [30, 100, -110] },
    { scroll: 30, position: [30, 8, -100] },
    { scroll: 40, position: [-60, 8, -100] },
    { scroll: 50, position: [-80, 58, -50] },
    { scroll: 70, position: [-100, 60, 100] },

    { scroll: 140, position: [140, 10, 130] },






  ];

  return (
    <>
      <div className=' fixed top-0 left-0 w-full h-screen'  >
        <Canvas shadows dpr={[1, 2]}  camera={{ position: [3, 10, -100], fov: 70 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <Suspense fallback={<Loader />}>
            <Model />
          </Suspense>
          <SetBackground imageUrl="/bg.png" />
          {/* <OrbitControls /> */}
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/kiara_1_dawn_1k.hdr"


          />
          <ScrollCamera cameraPositions={cameraPositions} />
        </Canvas>
      </div>

      <div className="scroll-content relative">
        <section style={{ minHeight: '400vh', padding: '0rem', color: 'white' }} >
          <div className='h-[1900vh] w-full py-40'>
            <div className='h-10  w-full  mb-10 flex items-center justify-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" className='w-full h-full ' alt="" />
                </div>
              <div className='bebas-neue-regular p-1 w-full text-6xl md:text-[150px] flex items-center justify-center rounded-xl shadow-2xl  bg-[#EE232C] text-white  '>
                  <h1 className='avenger px-4 md:leading-60 leading-40 whitespace-nowrap  '>
                    Compufest 2K25
                </h1>
              </div> 

          </div>


          <div className='h-max w-full'>
            {/* <div className='h-screen w-full  bg-[#518cca]'> */}

            <Event />
          </div>
          <div>
            <OurSponsors />
          </div>
        </section>
      </div>

    </>


  );
}
