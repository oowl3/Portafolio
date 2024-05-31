import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF} from '@react-three/drei'
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
        
type GLTFResult = GLTF & { nodes: { chair: THREE.Mesh }
    materials: { ['BrownDark.052']: THREE.MeshStandardMaterial}}

export default function Model13(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf') as GLTFResult
    return (
        <group ref={group} {...props} scale={1.6} rotation={[0,Math.PI/2,0]}>
            <group position={[0,-1.95,0]}>
                <mesh geometry={nodes.chair.geometry} material={materials['BrownDark.052']} />
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf')