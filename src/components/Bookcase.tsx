import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
interface Model11Props extends GroupProps {}

type GLTFResult =  {
    nodes: {
        Cube030: THREE.Mesh,
        Cube030_1: THREE.Mesh,
        Cube030_2: THREE.Mesh,
        Cube030_3: THREE.Mesh,
        Cube030_4: THREE.Mesh,
        Cube030_5: THREE.Mesh,
        Cube030_6: THREE.Mesh,
        Cube030_7: THREE.Mesh,
    },
    materials: {
        'BrownDark.045': THREE.Material,
        'PurpleDark.001': THREE.Material,
        'White.032': THREE.Material,
        'Metal.078': THREE.Material,
        'BlueDark.001': THREE.Material,
        'GreenDark.005': THREE.Material,
        'WoodDark.003': THREE.Material,
        'Black.029': THREE.Material,
    }
};

export default function Model11(props: Model11Props) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase/model.gltf') as unknown as GLTFResult;
    return (
        <group ref={group} {...props} scale={1.7}>
            <group rotation={[Math.PI / 2, 0, 0]} position={[0, -1.95, 0]}>
                {nodes.Cube030 && <mesh geometry={nodes.Cube030.geometry} material={materials['BrownDark.045']} />}
                {nodes.Cube030_1 && <mesh geometry={nodes.Cube030_1.geometry} material={materials['PurpleDark.001']} />}
                {nodes.Cube030_2 && <mesh geometry={nodes.Cube030_2.geometry} material={materials['White.032']} />}
                {nodes.Cube030_3 && <mesh geometry={nodes.Cube030_3.geometry} material={materials['Metal.078']} />}
                {nodes.Cube030_4 && <mesh geometry={nodes.Cube030_4.geometry} material={materials['BlueDark.001']} />}
                {nodes.Cube030_5 && <mesh geometry={nodes.Cube030_5.geometry} material={materials['GreenDark.005']} />}
                {nodes.Cube030_6 && <mesh geometry={nodes.Cube030_6.geometry} material={materials['WoodDark.003']} />}
                {nodes.Cube030_7 && <mesh geometry={nodes.Cube030_7.geometry} material={materials['Black.029']} />}
            </group>
        </group>
    );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase/model.gltf');
