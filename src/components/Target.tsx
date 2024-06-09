import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF} from '@react-three/drei'

    
type GLTFResult = {
    nodes: {
        Cylinder016: THREE.Mesh,
        Cylinder016_1: THREE.Mesh,
        Cylinder016_2: THREE.Mesh
    }
    materials: {
        'Red.025': THREE.MeshStandardMaterial,
        'White.025': THREE.MeshStandardMaterial,
        'BrownDark.018': THREE.MeshStandardMaterial
    }
}

export default function Model0(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!)
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf') as unknown as GLTFResult;
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, Math.PI ]}  position={[5, -.1, -3]}>
                {nodes.Cylinder016 && <mesh geometry={nodes.Cylinder016.geometry} material={materials['Red.025']} />}
                {nodes.Cylinder016_1 && <mesh geometry={nodes.Cylinder016_1.geometry} material={materials['White.025']} />}
                {nodes.Cylinder016_2 && <mesh geometry={nodes.Cylinder016_2.geometry} material={materials['BrownDark.018']} />}
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');