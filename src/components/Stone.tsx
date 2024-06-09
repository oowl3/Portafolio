import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

type GLTFResult = {
    nodes: { rocksA_forest: THREE.Mesh }
    materials: {'Stone.007': THREE.MeshStandardMaterial}}

export default function Model18(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/rocks-forrest/model.gltf') as unknown as GLTFResult;
    return (
        <group ref={group} {...props} >
            <group position={[0,-3.45,0]}>
                {nodes.rocksA_forest && <mesh geometry={nodes.rocksA_forest.geometry} material={materials['Stone.007']} rotation={[Math.PI / 2, 0, 0,]} />}
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/rocks-forrest/model.gltf');