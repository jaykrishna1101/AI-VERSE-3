// components/Model.jsx
import React, { forwardRef, useEffect, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';

const ResponsiveModel = forwardRef(( { setSuspenseResolved, ...props } , ref) => {
  const { scene } = useGLTF('/model/model.glb');
  const { viewport } = useThree();
  const renderedOnce = useRef(false);

  // Dynamic scale
  const scale = useMemo(() => {
    if (viewport.width < 6) return 0.02;
    if (viewport.width < 10) return 0.6;
    return 1;
  }, [viewport.width]);

  // Shadows setup
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // Detect first render on browser
  useFrame(() => {
    if (!renderedOnce.current) {
      console.log('Model fully rendered in browser');
      setSuspenseResolved(true);
      renderedOnce.current = true;
    }
  });

  return <primitive ref={ref} object={scene} scale={scale} {...props} />;
});

export default ResponsiveModel;
