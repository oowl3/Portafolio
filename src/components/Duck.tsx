import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type GLTFResult = GLTF & {
    nodes: {
    character_duck: THREE.Mesh,character_duckArmLeft: THREE.Mesh,character_duckArmRight: THREE.Mesh,Cube1338: THREE.Mesh,Cube1338_1: THREE.Mesh,Cube1338_2: THREE.Mesh

    }
    materials: {
    ['White.026']: THREE.MeshStandardMaterial,['Yellow.043']: THREE.MeshStandardMaterial,['Black.027']: THREE.MeshStandardMaterial
    }
}

export default function Model5(props: JSX.IntrinsicElements['group']) {
const group = useRef<THREE.Group>()
const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf') as GLTFResult
return (
<group ref={group} {...props} rotation={[0, Math.PI , 0 ]}  position={[7, .4, -1.3]}>
    <mesh geometry={nodes.character_duck.geometry} material={nodes.character_duck.material} rotation={[Math.PI / 2, 0, 0,]} >
    <mesh geometry={nodes.character_duckArmLeft.geometry} material={nodes.character_duckArmLeft.material} position={[0.2, 0, -0.63,]} />
    <mesh geometry={nodes.character_duckArmRight.geometry} material={nodes.character_duckArmRight.material} position={[-0.2, 0, -0.63,]} />
    <group position={[0, 0, -0.7,]} >
        <mesh geometry={nodes.Cube1338.geometry} material={nodes.Cube1338.material} />
        <mesh geometry={nodes.Cube1338_1.geometry} material={materials['Yellow.043']} />
        <mesh geometry={nodes.Cube1338_2.geometry} material={materials['Black.027']} />
    </group>
    </mesh>
</group>
)
}
