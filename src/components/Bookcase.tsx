import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model11(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase/model.gltf')
    return (
        <group ref={group} {...props} scale={1.7} >
            <group rotation={[Math.PI / 2, 0, 0,]} position={[0,-1.95,0]}>
                <mesh geometry={nodes.Cube030.geometry} material={materials['BrownDark.045']} />
                <mesh geometry={nodes.Cube030_1.geometry} material={materials['PurpleDark.001']} />
                <mesh geometry={nodes.Cube030_2.geometry} material={materials['White.032']} />
                <mesh geometry={nodes.Cube030_3.geometry} material={materials['Metal.078']} />
                <mesh geometry={nodes.Cube030_4.geometry} material={materials['BlueDark.001']} />
                <mesh geometry={nodes.Cube030_5.geometry} material={materials['GreenDark.005']} />
                <mesh geometry={nodes.Cube030_6.geometry} material={materials['WoodDark.003']} />
                <mesh geometry={nodes.Cube030_7.geometry} material={materials['Black.029']} />
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase/model.gltf')