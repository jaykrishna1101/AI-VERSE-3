import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Model = ({ url }) => {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

const ModelViewer = ({ modelUrl }) => {
  return (
    <Canvas camera={{ position: [2, 2, 2], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Model url={modelUrl} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default ModelViewer
