import React, { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export const ImagePlane: React.FC = () => {
    const texture = useLoader(TextureLoader, '../../public/Portada.PNG');
    const planeRef = useRef<THREE.Mesh>();

    useEffect(() => {
        if (texture) {
            const textureAspect = texture.image.width / texture.image.height;
            if (planeRef.current) {
                planeRef.current.scale.x = textureAspect;
            }
        }
    }, [texture]);

    return (
        <mesh castShadow receiveShadow position={[0, 5, 0.51]} ref={planeRef}>
            <planeGeometry args={[9, 9]} />
            <meshBasicMaterial
                map={texture}
                envMapIntensity={0.5}
                roughness={0.2}
                metalness={0.8}
            />
        </mesh>
    );
};
