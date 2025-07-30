// App.jsx
import React, { useEffect, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from './components/model';
import SetBackground from './components/BG'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';

import * as THREE from 'three';

function ScrollCamera({ cameraPositions }) {
  const { camera } = useThree();
  const [scrollPercent, setScrollPercent] = useState(0);
  const targetPosition = useRef(new THREE.Vector3());
  const lerpSpeed = 0.05; // adjust for speed of smoothness

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



  const cameraPositions = [
    { scroll: 0, position: [3, 1,  -100] },
    { scroll: 50, position: [30, 1, -110] },
    { scroll: 20, position: [3, 1, -120] },
    { scroll: 30, position: [3, 1, -130] },
    { scroll: 40, position: [3, 1, -140] },
    { scroll: 50, position: [3, 2, -140] },
    { scroll: 100, position: [3, 30, -140] },
  
  ];

  return (
    <>
      <div className=' fixed top-0 left-0 w-full h-screen'  >
        <Canvas camera={{ position: [3, 1, -100], fov: 70 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <Model scale={1} />
          <SetBackground imageUrl="/bg.png" />
          {/* <OrbitControls /> */}
          <Environment preset="dawn" />
          <ScrollCamera cameraPositions={cameraPositions} />
        </Canvas>
      </div>

      <div className="scroll-content relative">
        <section style={{ height: '200vh', padding: '5rem', color: 'white' }}>
         
        </section>
      </div>

    </>


  );
}
