import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';




import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.75 : 2.1}
        position={isMobile ? [0, -1, 0.1] : [0, -1.55, 1]}
        rotation={[0.1, 0.75, -0.15]}
      >  
      </primitive> 
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {

    //Add a listener for changes to the screen size

    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    //Set the initial value of the `isMobile` state variable

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    //Define a callback function to handle changes to the media query

    mediaQuery.addEventListener('change',
    handleMediaQueryChange)

    //Remove the listener when the component is unmounted

    return ( ) => {
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange)
    }
  }, []);

  
  return (
      <motion.div
        initial= {{opacity: 0}}
        whileInView= {{
          opacity: 1,
          transition: {duration: 3}
        }}
        animate={{
            y: [0, 24, 0],
            transition: {repeat: Infinity, duration: 2}
          }}
          transition={{
            repeatType: 'loop'
          }}
        className='w-full h-[100%]'
      >
        <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader />}>
            <Computers isMobile={isMobile}/>
        </Suspense>
        <Preload all />
      </Canvas>
      </motion.div>
    )
}

export default ComputersCanvas
