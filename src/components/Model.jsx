// components/Model.jsx
import React, { forwardRef, useEffect, useMemo } from 'react';
import { useGLTF, useProgress, Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const ResponsiveModel = forwardRef((props, ref) => {
  const { scene } = useGLTF('/model/model.glb'); // path should be correct relative to `public`
  const { viewport } = useThree();

  // Dynamic scale based on viewport width
  const scale = useMemo(() => {
    if (viewport.width < 6) return 1;
    if (viewport.width < 10) return 0.6;
    return 1;
  }, [viewport.width]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive ref={ref} object={scene} scale={scale} {...props} />;
});

export default ResponsiveModel;
