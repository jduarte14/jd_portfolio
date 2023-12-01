
'use client'
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stars } from "@react-three/drei";

import CanvasLoader from "./Loader";
export const StarsComponent = () => {
  const controls = useRef(null);
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 900,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
         ref={controls}
         autoRotate  
         enableZoom={false}
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}
        />
        <Stars/>


        <Preload all />
      </Suspense>
    </Canvas>
  );
};

