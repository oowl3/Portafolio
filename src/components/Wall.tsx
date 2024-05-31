import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
        
type GLTFResult = {
    nodes: { Cube4230: THREE.Mesh,Cube4230_1: THREE.Mesh }
    materials: { ['Stone.050']: THREE.MeshStandardMaterial,['StoneDark.011']: THREE.MeshStandardMaterial }
}

export default function Model9(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/wall/model.gltf') as GLTFResult
    return (
        <group ref={group} {...props}>
            <group rotation={[Math.PI / 2, 0, 0,]} position={[0,-3,0]}>
                <mesh geometry={nodes.Cube4230.geometry} material={materials['Stone.050']} />
                <mesh geometry={nodes.Cube4230_1.geometry} material={materials['StoneDark.011']} />
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/wall/model.gltf')