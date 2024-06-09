import { useEffect, useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, Texture } from 'three';
import { Mesh } from 'three';

// Definimos las propiedades del componente ImagePlane
interface ImagePlaneProps {
    texturePath: string;
    position: [number, number, number];
    visible: boolean;
}

const images = [
    '/public/Argos.PNG',
    '/public/Clima_1.PNG',
    '/public/Clima_2.PNG',
    '/public/Clima_3.PNG',
    '/public/Clima_4.PNG',
    '/public/Reproductor.PNG',
];

const ImagePlane: React.FC<ImagePlaneProps> = ({ texturePath, position, visible }) => {
    // Usamos useLoader para cargar la textura
    const texture = useLoader(TextureLoader, texturePath) as Texture;

    // Usamos useRef con el tipo correcto
    const planeRef = useRef<Mesh>(null);

    useEffect(() => {
        if (texture && texture.image) {
            const textureAspect = (texture.image as HTMLImageElement).width / (texture.image as HTMLImageElement).height;
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
            />
        </mesh>
    );
};

export const ImageCarousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <group position={[0, 0, 0]}>
            {images.map((image, index) => (
                <ImagePlane
                    key={index}
                    texturePath={image}
                    position={[0, 5.2, -0.51]} // Colocamos el plano en una posición visible desde [0, 0, -20]
                    visible={index === currentImageIndex}
                />
            ))}
        </group>
    );
};
