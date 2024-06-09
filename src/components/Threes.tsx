import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF} from '@react-three/drei'
        
type GLTFResult = { 
    nodes: { 
        Cylinder017: THREE.Mesh,
        Cylinder017_1: THREE.Mesh 
    }
    materials: {
        'GreenDark.003': THREE.MeshStandardMaterial,
        'BrownDark.035': THREE.MeshStandardMaterial
    }}

export default function Model17(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!)
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-kaykit-2/model.gltf') as unknown as GLTFResult;
    return (
        <group ref={group} {...props} scale={2} >
            <group rotation={[Math.PI / 2, 0, 0,]} position={[0,-1.9,0]}>
                <mesh geometry={nodes.Cylinder017.geometry} material={materials['GreenDark.003']} />
                <mesh geometry={nodes.Cylinder017_1.geometry} material={materials['BrownDark.035']} />
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-kaykit-2/model.gltf');