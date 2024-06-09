import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF, Text } from '@react-three/drei'

type GLTFResult = {
    nodes: {
    cuttingBoardJapanese: THREE.Mesh
    
    }
    materials: {
    'brownLight': THREE.MeshStandardMaterial
    }
}

export default function Model6(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cutting-board-japanese/model.gltf') as unknown as GLTFResult;
    return (
        <group ref={group} {...props}  position={[-9, -11.5, -11]}>
            <group position={[0,-3.6,0]}>
                {nodes.cuttingBoardJapanese && <mesh geometry={nodes.cuttingBoardJapanese.geometry} material={materials.brownLight} scale={[4,3,5]}  rotation={[Math.PI,Math.PI/2,Math.PI/2]}/>}
                <Text position={[0,.5,-.3]} fontSize={.8} color="black" anchorX="center" anchorY="middle" rotation={[0,Math.PI, 0]}>
                    Descargar 
                </Text>
                <Text position={[0,-.4,-.5]} fontSize={1} color="black" anchorX="center" anchorY="middle" rotation={[0,Math.PI, 0]}>
                    CV
                </Text>
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cutting-board-japanese/model.gltf');