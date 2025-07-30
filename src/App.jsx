import { useState } from 'react'


function App() {


  return (
    <>
    <div className='h-screen w-full '>
     <div className='h-full w-full absolute top-0 '>
     <img src="/bg.png" alt="" className='  h-full w-full objevt-cover' />
     </div>
      <div style={{ width: '100vw', height: '100vh' }}>
      <ModelViewer modelUrl="/model/scene.gltf" />
    </div>
    </div>
    </>
 
  )
}

export default App
