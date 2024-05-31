import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF} from '@react-three/drei'
import { GroupProps } from '@react-three/fiber';
interface Model13Props extends GroupProps {}

type GLTFResult =  {
    nodes: {
        chair: THREE.Mesh,
    },
    materials: {
        'BrownDark.052': THREE.Material,
    }
};

export default function Model13(props: Model13Props){
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf') as unknown as GLTFResult;
    return (
        <group ref={group} {...props} scale={1.6} rotation={[0,Math.PI/2,0]}>
            <group position={[0,-1.95,0]}>
                {nodes.chair && <mesh geometry={nodes.chair.geometry} material={materials['BrownDark.052']} />}
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf')