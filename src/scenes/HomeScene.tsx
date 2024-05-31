import React, { useEffect } from 'react';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import { ImageCarousel } from '@/components/ImageCarousel';
import { ImagePlane } from '@/components';
import { Decoration } from '@/components/Decoration';
import CvButton from '@/components/CvButton';
import Model0 from '@/components/Target';
import Model1 from '@/components/IconReact';
import Model2 from '@/components/Keyboard';
import Model3 from '@/components/Node';
import Model4 from '@/components/Star';
//import Model5 from '@/components/Duck';
import Model6 from '@/components/Poster';
import Model7 from '@/components/Ladder';
import Model8 from '@/components/Floor';
import Model9 from '@/components/Wall';
import Model10 from '@/components/Door';
import Model11 from '@/components/Bookcase';
import Model12 from '@/components/BookcaseLong';
import Model13 from '@/components/Chair';
import Model14 from '@/components/Table';
import Model15 from '@/components/Pc';
import Model16 from '@/components/Phone';
import Model17 from '@/components/Threes';
import Model18 from '@/components/Stone';

interface HomeSceneProps {
  onSceneLoaded: () => void;
}

const HomeScene: React.FC<HomeSceneProps> = ({ onSceneLoaded }) => {
  useEffect(() => {
    onSceneLoaded();
  }, [onSceneLoaded]);

  return (
    <>
      <OrbitControls />
      <Environment preset='forest' />
      <directionalLight position={[10, 15, 15]} color="#154360" castShadow intensity={5} shadow-camera-near={0.1} />
      <group position={[0, -3, -1]} >
        <Decoration />
        <ImagePlane />
        <ImageCarousel />
        <Model0 />
        <Model1 />
        <Model2 />
        <Model3 />
        {/* <Model5 /> */}
        <Model4 position={[-6, 1, -3]} />
        <Model4 position={[-5, 2, -3]} />
        <Model4 position={[-4, 1, -3]} />
        <Model6 />
        <Model7 position={[6, -4.1, -8.8]}/>
        <Model7 position={[6, -7.1, -8.8]} />
        <Model7 position={[6, -10.1, -8.8]} />
        <Model7 position={[6, -13.1, -8.8]} />
        <Model7 position={[6, -16.1, -8.8]} />
        <Model7 position={[6, -19.1, -8.8]} />
        <Model8 />
        <CvButton />
        {/* Pared */}
        <Model9  position={[3, -15.75, -5]} />
        <Model9  position={[7, -15.75, -5]} />
        <Model9  position={[11, -15.75, -5]} />
        <Model9  position={[15, -15.75, -5]} />
        <Model9  position={[1.5, -15.75, -6.3]} rotation={[0, Math.PI/2, 0,]}/>
        <Model9  position={[1.5, -15.75, -10.3]} rotation={[0, Math.PI/2, 0,]}/>
        <Model9  position={[1.5, -15.75, -14.3]} rotation={[0, Math.PI/2, 0,]}/>
        <Model9  position={[1.5, -15.75, -18.3]} rotation={[0, Math.PI/2, 0,]}/>
        {/* Puerta */}
        <Model10 />
        {/* Libreros */}
        <Model11 position={[4, -15.7, -6]}/>
        <Model12 position={[6.5, -15.7, -6]}/>
        <Model12 position={[9.9, -15.7, -6]}/>
        <Model11 position={[12.5, -15.7, -6]}/>
        {/* Muebles */}
        <Model13 position={[6, -15.7, -17]}/>
        <Model14 position={[8, -15.7, -17]}/>
        <Model15 position={[7.2, -17.8, -17]}/>
        <Model16 position={[7, -17.51, -19]}/>
        {/* Arboles */}
        <Model17  position={[-2, -16, 0]}/>
        <Model17  position={[-5, -16, 2]}/>
        <Model17  position={[-7, -15.8, 5]}/>
        <Model17  position={[-3, -15.5, 3]}/>
        <Model17  position={[0, -16, 8]}/>
        <Model17  position={[-9, -16, 0]}/>
        <Model17  position={[-13, -16, 2]}/>
        <Model17  position={[-12, -15.8, 9]}/>
        <Model17  position={[-11, -15.5, 11]}/>
        <Model17  position={[-9, -16, 8]}/>
        {/* Piedras */}
        <Model18 position={[-8, -15.7, -10]}/>
        <Model18 position={[-5, -15.7, 2]}/>
        <Model18 position={[-10, -15.7, 4]}/>
        <Model18 position={[-2, -15.7, 5]}/>
      </group>
      <Stars radius={150} depth={20} count={7000} factor={10} saturation={0} fade speed={1} />
    </>
  );
};

export default HomeScene;
