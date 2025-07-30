// components/SetBackground.jsx
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function SetBackground({ imageUrl }) {
  const { scene } = useThree()

  useEffect(() => {
    new THREE.TextureLoader().load(imageUrl, (texture) => {
      scene.background = texture
    })
  }, [imageUrl, scene])

  return null
}




