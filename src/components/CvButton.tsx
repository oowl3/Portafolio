import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const handleButtonClick = () => {
  window.location.href = '../../public/CV_Ojeda.pdf';
};

type GLTFResult =  {
  nodes: {
    Cube1340: THREE.Mesh;
    Cube1340_1: THREE.Mesh;
  },
  materials: {
    'Blue.009': THREE.Material,
    'Metal.016': THREE.Material,
  }
};

export default function CvButton(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/button/model.gltf') as unknown as GLTFResult;;
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    const amplitude = 0.09;
    const frequency = 10; 

    if (isHovered) {
      group.current.rotation.x = Math.sin(elapsedTime * frequency) * amplitude;
      group.current.rotation.y = Math.cos(elapsedTime * frequency) * amplitude;
    } else {
      group.current.rotation.x = 0;
      group.current.rotation.y = 0;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      position={[-9, -14, -11]}
      onClick={handleButtonClick}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <group rotation={[0, 0, 0]} scale={1.8} position={[0,-3.8,0]}>
        <mesh geometry={nodes.Cube1340.geometry} material={materials['Blue.009']} />
        <mesh geometry={nodes.Cube1340_1.geometry} material={materials['Metal.016']} />
      </group>
    </group>
  );
}
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/button/model.gltf');