import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

type GLTFResult = {
    nodes: {
        tableLarge: THREE.Mesh
    }
    materials: {
        'BrownDark.074' : THREE.MeshStandardMaterial
    }
  }

export default function Model14(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table-wood/model.gltf') as unknown as GLTFResult;
    return (
        <group ref={group} {...props} scale={1.6} rotation={[0,Math.PI/2,0]}>
            <group position={[0,-1.95,0]}>
                <mesh geometry={nodes.tableLarge.geometry} material={materials['BrownDark.074']} rotation={[Math.PI / 2, 0, 0,]} />
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table-wood/model.gltf');