// components/Model.jsx
import React, { forwardRef, useEffect, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';

const ResponsiveModel = forwardRef((
  { setSuspenseResolved, ...props },
  ref
) => {
  const { scene } = useGLTF('/model/f1_mercedes_w13_concept.glb');
  const { viewport } = useThree();
  const renderedOnce = useRef(false);

  // Dynamic scale - Increased values for better visibility
  const scale = useMemo(() => {
    // Mobile devices (small screens)
    if (viewport.width < 6) return 1.5;
    // Tablet size screens
    if (viewport.width < 10) return 2.0;
    // Desktop screens
    return 0.3;
  }, [viewport.width]);

  // Rotation to show front view - rotate 180 degrees around Y axis
  const rotation = [0, Math.PI, 0];

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

  return <primitive ref={ref} object={scene} scale={scale} rotation={rotation} {...props} />;
});

export default ResponsiveModel;