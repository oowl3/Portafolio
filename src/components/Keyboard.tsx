import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF} from '@react-three/drei'
        
type GLTFResult = {
    nodes: {
    Case: THREE.Mesh,
    Keyboard_cable: THREE.Mesh,
    Keycaps: THREE.Mesh
    
    }
    materials: {
    ['Black rubber']: THREE.MeshStandardMaterial,['Keycap material']: THREE.MeshStandardMaterial
    }
}

export default function Model2(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/mechanical-keyboard-tenkeyless/model.gltf') as unknown as GLTFResult;
    return (
    <group ref={group} {...props} position={[-1, -.1, 1.4]}>
        {nodes.Case && <mesh geometry={nodes.Case.geometry} material={nodes.Case.material} position={[0.59, 0, 0,]} />}
        {nodes.Keyboard_cable && <mesh geometry={nodes.Keyboard_cable.geometry} material={nodes.Keyboard_cable.material} position={[0.59, 0, 0,]} />}
        {nodes.Keycaps && <mesh geometry={nodes.Keycaps.geometry} material={materials['Keycap material']} position={[0.59, 0, 0,]} />}
    </group>
    )
}
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/mechanical-keyboard-tenkeyless/model.gltf');