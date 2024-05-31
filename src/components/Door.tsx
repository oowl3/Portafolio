import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export default function Model10(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/door-old/model.gltf')
    return (
        <group ref={group} {...props} position={[.3, -14.7, -15]} scale={1.3}>
            <group rotation={[Math.PI / 2, 0, 2.2,]} position={[0,-2.5,0]} >
                <mesh geometry={nodes.Cube4153.geometry} material={materials['BrownDark.060']} />
                <mesh geometry={nodes.Cube4153_1.geometry} material={materials['Metal.093']} />
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/door-old/model.gltf')