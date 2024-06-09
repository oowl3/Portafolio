import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

type GLTFResult = {
    nodes: {
        Plane_1: THREE.Mesh,
        Plane_2: THREE.Mesh,
        Plane_3: THREE.Mesh
    },
    materials: {
        'Material.010': THREE.MeshStandardMaterial,
        'Material.009': THREE.MeshStandardMaterial,
        'Material.008': THREE.MeshStandardMaterial
    }
}

export default function Model3(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/node/model.gltf') as unknown as GLTFResult;
    
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
            {nodes.Plane_1 && <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.010']} />}
            {nodes.Plane_2 && <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.009']} />}
            {nodes.Plane_3 && <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.008']} />}
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/node/model.gltf');