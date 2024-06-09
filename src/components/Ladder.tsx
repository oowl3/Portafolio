import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
    
type GLTFResult = {
    nodes: {
        barrierLadder: THREE.Mesh
    }
    materials: {
        'Metal.008': THREE.MeshStandardMaterial
    }
}

export default function Model7(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ladder/model.gltf') as unknown as GLTFResult;
    return (
        <group ref={group} {...props} scale={1.5} rotation={[0,-.4,0]}>
            {nodes.barrierLadder && <mesh geometry={nodes.barrierLadder.geometry} material={materials['Metal.008']} />}
        </group>
    )
}