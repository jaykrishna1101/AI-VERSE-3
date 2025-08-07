import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';

function ScrollCamera({ cameraPositions }) {
  const { camera } = useThree();
  const [scrollPercent, setScrollPercent] = useState(0);

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
        const newPos = current.position.map((c, idx) =>
          c + (next.position[idx] - c) * t
        );
        camera.position.set(...newPos);
        camera.lookAt(0, 0, 0);
        break;
      }
    }
  });

  return null;
}
