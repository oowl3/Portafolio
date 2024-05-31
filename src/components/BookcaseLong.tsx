import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export default function Model12(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase-wide/model.gltf')
    return (
        <group ref={group} {...props} scale={1.7}>
            <group rotation={[Math.PI / 2, 0, 0,]} position={[0,-1.95,0]}>
                <mesh geometry={nodes.Cube033.geometry} material={materials['BrownDark.049']} />
                <mesh geometry={nodes.Cube033_1.geometry} material={materials['PurpleDark.003']} />
                <mesh geometry={nodes.Cube033_2.geometry} material={materials['White.034']} />
                <mesh geometry={nodes.Cube033_3.geometry} material={materials['Metal.080']} />
                <mesh geometry={nodes.Cube033_4.geometry} material={materials['BlueDark.003']} />
                <mesh geometry={nodes.Cube033_5.geometry} material={materials['GreenDark.007']} />
                <mesh geometry={nodes.Cube033_6.geometry} material={materials['WoodDark.005']} />
                <mesh geometry={nodes.Cube033_7.geometry} material={materials['StoneDark.001']} />
                <mesh geometry={nodes.Cube033_8.geometry} material={materials['Black.030']} />
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase-wide/model.gltf')