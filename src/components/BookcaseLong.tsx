import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber';
interface Model12Props extends GroupProps {}

type GLTFResult =  {
    nodes: {
        Cube033: THREE.Mesh,
        Cube033_1: THREE.Mesh,
        Cube033_2: THREE.Mesh,
        Cube033_3: THREE.Mesh,
        Cube033_4: THREE.Mesh,
        Cube033_5: THREE.Mesh,
        Cube033_6: THREE.Mesh,
        Cube033_7: THREE.Mesh,
        Cube033_8: THREE.Mesh,
    },
    materials: {
        'BrownDark.049': THREE.Material,
        'PurpleDark.003': THREE.Material,
        'White.034': THREE.Material,
        'Metal.080': THREE.Material,
        'BlueDark.003': THREE.Material,
        'GreenDark.007': THREE.Material,
        'WoodDark.005': THREE.Material,
        'StoneDark.001': THREE.Material,
        'Black.030': THREE.Material,
    }
};

export default function Model12(props: Model12Props) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase-wide/model.gltf')as unknown as GLTFResult;
    return (
        <group ref={group} {...props} scale={1.7}>
            <group rotation={[Math.PI / 2, 0, 0,]} position={[0,-1.95,0]}>
                {nodes.Cube033 && <mesh geometry={nodes.Cube033.geometry} material={materials['BrownDark.049']} />}
                {nodes.Cube033_1 && <mesh geometry={nodes.Cube033_1.geometry} material={materials['PurpleDark.003']} />}
                {nodes.Cube033_2 && <mesh geometry={nodes.Cube033_2.geometry} material={materials['White.034']} />}
                {nodes.Cube033_3 && <mesh geometry={nodes.Cube033_3.geometry} material={materials['Metal.080']} />}
                {nodes.Cube033_4 && <mesh geometry={nodes.Cube033_4.geometry} material={materials['BlueDark.003']} />}
                {nodes.Cube033_5 && <mesh geometry={nodes.Cube033_5.geometry} material={materials['GreenDark.007']} />}
                {nodes.Cube033_6 && <mesh geometry={nodes.Cube033_6.geometry} material={materials['WoodDark.005']} />}
                {nodes.Cube033_7 && <mesh geometry={nodes.Cube033_7.geometry} material={materials['StoneDark.001']} />}
                {nodes.Cube033_8 && <mesh geometry={nodes.Cube033_8.geometry} material={materials['Black.030']} />}
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase-wide/model.gltf');