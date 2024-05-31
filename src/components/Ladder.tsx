import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
    
type GLTFResult = GLTF & {
    nodes: {
        barrierLadder: THREE.Mesh
        
    }
    materials: {
        ['Metal.008']: THREE.MeshStandardMaterial
    }
}

export default function Model7(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ladder/model.gltf') as GLTFResult
    return (
        <group ref={group} {...props} scale={1.5} rotation={[0,-.4,0]}>
            <mesh geometry={nodes.barrierLadder.geometry} material={materials['Metal.008']} />
        </group>
    )
}