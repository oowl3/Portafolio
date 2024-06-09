import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

type GLTFResult = {
    nodes: {
        star: THREE.Mesh
    }
    materials: {
        'Yellow.030': THREE.MeshStandardMaterial
    }
}

export default function Model4(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/star/model.gltf') as unknown as GLTFResult;
    
    const [rotationDirection, setRotationDirection] = useState<'forward' | 'backward'>('forward')
    const rotationRef = useRef<number>(0)

    useFrame(() => {
        const rotationSpeed = 0.01

        if (rotationDirection === 'forward') {
            rotationRef.current += rotationSpeed
            if (rotationRef.current >= Math.PI / 6) {
                setRotationDirection('backward')
            }
        } else {
            rotationRef.current -= rotationSpeed
            if (rotationRef.current <= -Math.PI / 6) {
                setRotationDirection('forward')
            }
        }

        if (group.current) {
            group.current.rotation.z = rotationRef.current
        }
    })

    return (
        <group ref={group} {...props} rotation={[ Math.PI/2, 0, 0]}>
            {nodes.star && <mesh geometry={nodes.star.geometry} material={materials['Yellow.030']} />}
        </group>
    )
}
