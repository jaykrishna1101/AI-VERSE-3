// In App.jsx (inside Canvas)
import { Suspense } from 'react';
import { Html, useProgress } from '@react-three/drei';
import ResponsiveModel from '../../components/Model';

 export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-black fixed w-full h-full  bg-red-400 text-xl font-bold z-[1000] ">Loading {progress.toFixed(0)}%</div>
    </Html>
  );
}
