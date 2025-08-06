// App.jsx
import React, { useEffect, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from '../components/Model'
import SetBackground from '../components/BG'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Suspense } from 'react';
import Loader from "../lib/utils/Loader"
import OurSponsors from '../components/OurSponsors';
import Footer from '../components/Footer';
import * as THREE from 'three';
import Event from '../components/Event';
import audio from "../assets/background-music.mp3"

import CoreCommittee from '../components/CoreCommittee';


import ReusableLaoder from '../components/reusable-laoder';
import { useLenis } from '../lib/utils/lenis';
import { FloatingDockDemo } from '../components/Nav';
import LandingHome from '../components/landing';
import MusicPlayer from '../components/music';

function ScrollCamera({ cameraPositions }) {
  const { camera } = useThree();
  const [scrollPercent, setScrollPercent] = useState(0);
  const targetPosition = useRef(new THREE.Vector3());
  const lerpSpeed = 1;



  const scrollTo = useLenis();

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


  const [loadingDone, setLoadingDone] = useState(false);
  const [progress, setProgress] = useState(0);



  const cameraPositions = [
    { scroll: 0, position: [30, 100, -110] },
    { scroll: 20, position: [30, 8, -100] },
    { scroll: 30, position: [-60, 8, -100] },
    { scroll: 40, position: [-80, 58, -50] },
    { scroll: 60, position: [-100, 60, 100] },

    { scroll: 150, position: [140, 10, 130] },

  ];







  return (
    <>
      {/* <ContinuousMusic /> */}

      <div className='  fixed top-0 left-0 w-full h-full  md:h-screen '  >
        <Canvas shadows dpr={[1, 2]} camera={{ position: [3, 10, -100], fov: 70 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <Suspense fallback={<Loader onProgress={setProgress} />}>
            <Model />
            <SetBackground imageUrl="/bg.png" />
            <Environment
              files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/kiara_1_dawn_1k.hdr"

            />
          </Suspense>
          <ScrollCamera cameraPositions={cameraPositions} />
        </Canvas>
      </div>


      <div className="scroll-content relative overflow-hidden">


        <section style={{ minHeight: '400vh', padding: '0rem', color: 'white' }} >
          
          <FloatingDockDemo scrollto={scrollTo} />
          <MusicPlayer />
          <LandingHome />


          <div id="events" className='h-max w-full'>
            {/* <div className='h-screen w-full  bg-[#518cca]'> */}
            <Event />
          </div>

          <div>
            <OurSponsors />
          </div>

          <div className='h-[200vh] w-full'>

          </div>

          <div>
            <CoreCommittee />
          </div>

          <div className='avenger tracking-widest h-80 w-full overflow-hidden flex items-center justify-center  '>
            <Footer />
          </div>

        </section>
      </div>

    </>


  );
}
