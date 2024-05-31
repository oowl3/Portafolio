import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
interface Model10Props extends GroupProps {}

type GLTFResult =  {
    nodes: {
        Cube4153: THREE.Mesh,
        Cube4153_1: THREE.Mesh,
    },
    materials: {
        'BrownDark.060': THREE.Material,
        'Metal.093': THREE.Material,
    }
};


export default function Model10(props: Model10Props){
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/door-old/model.gltf') as unknown as GLTFResult;
    return (
        <group ref={group} {...props} position={[.3, -14.7, -15]} scale={1.3}>
            <group rotation={[Math.PI / 2, 0, 2.2,]} position={[0,-2.5,0]} >
                {nodes.Cube4153 && <mesh geometry={nodes.Cube4153.geometry} material={materials['BrownDark.060']} />}
                {nodes.Cube4153_1 && <mesh geometry={nodes.Cube4153_1.geometry} material={materials['Metal.093']} />}
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/door-old/model.gltf')