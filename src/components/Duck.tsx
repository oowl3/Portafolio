import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
interface Model5Props extends GroupProps {}

type GLTFResult =  {
    nodes: {
    character_duck: THREE.Mesh,
    character_duckArmLeft: THREE.Mesh,
    character_duckArmRight: THREE.Mesh,
    Cube1338: THREE.Mesh,
    Cube1338_1: THREE.Mesh,
    Cube1338_2: THREE.Mesh

    }
    materials: {
    'White.026': THREE.MeshStandardMaterial,
    'Yellow.043': THREE.MeshStandardMaterial,
    'Black.027': THREE.MeshStandardMaterial
    }
}

export default function Model5(props: Model5Props){
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf') as unknown as GLTFResult;
    return (
    <group ref={group} {...props} rotation={[0, Math.PI , 0 ]}  position={[7, .5, -1]}>
        <mesh>
                {nodes.character_duck && <mesh geometry={nodes.character_duck.geometry} material={nodes.character_duck.material} rotation={[Math.PI / 2, 0, 0,]} />}
            <group position={[0, 0, 0]} rotation={[Math.PI/2,0,0 ]}>
                {nodes.character_duckArmLeft && <mesh geometry={nodes.character_duckArmLeft.geometry} material={nodes.character_duckArmLeft.material} position={[0.2, 0, -0.63,]} />}
                {nodes.character_duckArmRight && <mesh geometry={nodes.character_duckArmRight.geometry} material={nodes.character_duckArmRight.material} position={[-0.2, 0, -0.63,]} />}
            </group>
            <group position={[0, .7, 0,]} rotation={[Math.PI/2,0,0 ]}>
                {nodes.Cube1338 && <mesh geometry={nodes.Cube1338.geometry} material={nodes.Cube1338.material} />}
                {nodes.Cube1338_1 && <mesh geometry={nodes.Cube1338_1.geometry} material={materials['Yellow.043']} />}
                {nodes.Cube1338_2 && <mesh geometry={nodes.Cube1338_2.geometry} material={materials['Black.027']} />}
            </group>
        </mesh>
    </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf');