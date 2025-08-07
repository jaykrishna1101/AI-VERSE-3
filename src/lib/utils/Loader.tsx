// components/Loader.jsx
import { Html, useProgress } from '@react-three/drei';
import React, { useEffect } from 'react';

export default function Loader({ onProgress }) {
  const { progress } = useProgress();

  useEffect(() => {
    onProgress(progress);
   
  }, [progress, onProgress]);

  return (
    <Html center>
      <div className="text-white text-4xl font-bold bg-[#EE232C] px-10 py-6 rounded-xl shadow-lg animate-pulse">
        {Math.floor(progress)}%
      </div>
    </Html>
  );
}
