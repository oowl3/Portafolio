import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type GLTFResult = GLTF & {
    nodes: {
        Mesh_cuttingBoardRound: THREE.Mesh,
        Mesh_cuttingBoardRound_1: THREE.Mesh
    },
    materials: {
        brownLight: THREE.MeshStandardMaterial,
        brown: THREE.MeshStandardMaterial
    }
}

export default function Model8(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cutting-board-round/model.gltf') as GLTFResult

    materials.brownLight.color.set(0x8B4513)
    materials.brown.color.set(0xce7b4f)   

    return (
        <group ref={group} {...props} position={[0, -20.4, 0]} scale={40} >
            <mesh geometry={nodes.Mesh_cuttingBoardRound.geometry} material={materials.brownLight} />
            <mesh geometry={nodes.Mesh_cuttingBoardRound_1.geometry} material={materials.brown} />
        </group>
    )
}
