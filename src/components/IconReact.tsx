import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type GLTFResult = GLTF & {
    nodes: {
        Cube: THREE.Mesh,
        Torus001: THREE.Mesh,
        Torus002: THREE.Mesh,
        Torus003: THREE.Mesh
    },
    materials: {
        ['default']: THREE.MeshStandardMaterial,
        ['default']: THREE.MeshStandardMaterial,
        ['default']: THREE.MeshStandardMaterial,
        ['default']: THREE.MeshStandardMaterial
    }
}

export default function Model1(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/react-logo/model.gltf') as GLTFResult

    // Define the new material with the desired color
    const newMaterial = new THREE.MeshStandardMaterial({ color: '#61dafb' })

    // Ref for rotation
    const meshRef = useRef<THREE.Mesh>()

    // UseFrame for rotation animation
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.009 // Adjust rotation speed here
        }
    })

    return (
        <group ref={group} {...props} position={[-4, -.1, 4]}>
            <mesh
                ref={meshRef}
                geometry={nodes.Cube.geometry}
                material={newMaterial}
                position={[0, 1.31, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.27}
            >
                <mesh
                    geometry={nodes.Torus001.geometry}
                    material={newMaterial}
                    position={[0.34, -0.08, 0.02]}
                    rotation={[-0.16, 0, -Math.PI / 2]}
                    scale={[3.75, 1.47, 3]}
                />
                <mesh
                    geometry={nodes.Torus002.geometry}
                    material={newMaterial}
                    position={[-0.52, -0.1, 0.16]}
                    rotation={[-1.18, 0, -Math.PI / 2]}
                    scale={[3.75, 1.47, 3]}
                />
                <mesh
                    geometry={nodes.Torus003.geometry}
                    material={newMaterial}
                    position={[-0.04, -0.11, 0]}
                    rotation={[0.89, 0, -Math.PI / 2]}
                    scale={[3.75, 1.47, 3]}
                />
            </mesh>
        </group>
    )
}
