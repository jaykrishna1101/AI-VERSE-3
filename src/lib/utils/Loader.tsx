import { Html, useProgress } from '@react-three/drei';

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html fullscreen>
      <div className="fixed inset-0 flex items-center justify-center bg-red-400 text-black text-2xl font-bold z-[999]">
        Loading {progress.toFixed(0)}%
      </div>
    </Html>
  );
}
