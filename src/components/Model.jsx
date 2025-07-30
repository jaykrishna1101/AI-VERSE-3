import React from 'react';
import { useGLTF } from '@react-three/drei';



export default function Model(props) {
  const gltf = useGLTF('/model/scene.gltf');
  return <primitive object={gltf.scene} {...props} />;
}