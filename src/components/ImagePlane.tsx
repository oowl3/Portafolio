import React, { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, Group } from 'three';

export const ImagePlane: React.FC = () => {
    const link = '/Portada.png';

    const texture = useLoader(TextureLoader, link);
    const groupRef = useRef<Group>(null!);

    useEffect(() => {
        if (texture) {
            const textureAspect = texture.image.width / texture.image.height;
            if (groupRef.current) {
                groupRef.current.scale.x = textureAspect;
            }
        }
    }, [texture]);

    return (
        <group ref={groupRef} position={[0, 5, 0.51]}>
            <mesh castShadow receiveShadow>
                <planeGeometry args={[9, 9]} />
                <meshBasicMaterial map={texture} />
            </mesh>
        </group>
    );
};
