import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { Mesh } from "three";


const Computers = ({isMobile}) => {
  const computer=useGLTF('./computer_and_laptop/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} 
        groundColor="black"
      />
      <pointLight intensity={2}/>
      <spotLight 
      position={[2, 1, 1]}
      angle={0.2}
      penumbra={1}
      intensity={2}
      castShadow
      shadow-mapSize-width={1024}
      />
      <primitive object={computer.scene}
      scale={isMobile?0.08:0.1}
      position={isMobile?[0,-1.98,-0.5]:[0,-3.28,-1.6]}
      rotation={[0.03,-0.3,0.001]}
      />

    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 800px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };


    mediaQuery.addEventListener("change", handleMediaQueryChange);


    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;