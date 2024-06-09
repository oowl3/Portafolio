import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model14(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table-wood/model.gltf')
    return (
        <group ref={group} {...props} scale={1.6} rotation={[0,Math.PI/2,0]}>
            <group position={[0,-1.95,0]}>
                <mesh geometry={nodes.tableLarge.geometry} material={materials['BrownDark.074']} rotation={[Math.PI / 2, 0, 0,]} />
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table-wood/model.gltf')