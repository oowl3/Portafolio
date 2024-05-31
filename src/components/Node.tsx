import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type GLTFResult = GLTF & {
    nodes: {
        Plane_1: THREE.Mesh,
        Plane_2: THREE.Mesh,
        Plane_3: THREE.Mesh
    },
    materials: {
        ['Material.010']: THREE.MeshStandardMaterial,
        ['Material.009']: THREE.MeshStandardMaterial,
        ['Material.008']: THREE.MeshStandardMaterial
    }
}

export default function Model3(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/node/model.gltf') as GLTFResult
    
    const [hovered, setHovered] = useState(false)
    const rotationRef = useRef<number>(0)

    // UseFrame for rotation animation
    useFrame(() => {
        if (hovered && group.current) {
            rotationRef.current += .1
            group.current.rotation.y = rotationRef.current
        }
    })

    return (
        <group
            ref={group}
            {...props}
            position={[5, 1.3, 3]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.009']} />
            <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.008']} />
        </group>
    )
}
