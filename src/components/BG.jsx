// components/SetBackground.jsx
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function SetBackground({ imageUrl , ImageLoaded }) {
  const { scene } = useThree()

  useEffect(() => {
    const loader = new THREE.TextureLoader()

    loader.load(
      imageUrl,
      (texture) => {
        scene.background = texture
       ImageLoaded(true)
        console.log("✅ Background image loaded:", imageUrl)
      },
      undefined, // optional onProgress
      (error) => {
        console.error("❌ Failed to load background image:", error)
      }
    )
  }, [imageUrl, scene])

  return null
}
