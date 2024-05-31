import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
    nodes: {
        star: THREE.Mesh
    }
    materials: {
        ['Yellow.030']: THREE.MeshStandardMaterial
    }
}

export default function Model4(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/star/model.gltf') as GLTFResult
    
    const [rotationDirection, setRotationDirection] = useState<'forward' | 'backward'>('forward')
    const rotationRef = useRef<number>(0)

    useFrame(() => {
        const rotationSpeed = 0.01

        // Update rotation based on direction
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
            <mesh geometry={nodes.star.geometry} material={materials['Yellow.030']} />
        </group>
    )
}
