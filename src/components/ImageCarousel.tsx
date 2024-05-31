import { useEffect, useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const images = [
    '/public/Argos.PNG',
    '/public/Clima_1.PNG',
    '/public/Clima_2.PNG',
    '/public/Clima_3.PNG',
    '/public/Clima_4.PNG',
    '/public/Reproductor.PNG',

];

const ImagePlane = ({ texturePath, position, visible }) => {
    const texture = useLoader(TextureLoader, texturePath);
    const planeRef = useRef();

    useEffect(() => {
        if (texture) {
            const textureAspect = texture.image.width / texture.image.height;
            if (planeRef.current) {
                planeRef.current.scale.x = textureAspect;
            }
        }
    }, [texture]);

    return (
        <mesh
            castShadow
            receiveShadow
            position={position}
            rotation={[0, Math.PI, 0]} // Rotamos el plano para que se enfrente a la cámara
            ref={planeRef}
            visible={visible}
        >
            <planeGeometry args={[8, 9]} />
            <meshBasicMaterial
                map={texture}
                envMapIntensity={0.5}
                roughness={0.2}
                metalness={0.8}
            />
        </mesh>
    );
};

export const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        },5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <group position={[0, 0, 0]}>
            {images.map((image, index) => (
                <ImagePlane
                    key={index}
                    texturePath={image}
                    position={[0, 5.2, -.51]} // Colocamos el plano en una posición visible desde [0, 0, -20]
                    visible={index === currentImageIndex}
                />
            ))}
        </group>
    );
};