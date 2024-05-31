import { RoundedBox, Text } from '@react-three/drei';
export const Decoration = () =>{
return (
<group>
    <mesh castShadow receiveShadow position={[0, 5, 0]}>
        <boxGeometry args={[17.5, 10, 1]} />
        <meshStandardMaterial color="#0B1623" envMapIntensity={.05} roughness={.2} metalness={.8} />
    </mesh>

    <mesh position={[0, -1.49, 0]}>
        <cylinderGeometry args={[10, 10, 3, 60]} />
        <meshStandardMaterial color="#0B1623" envMapIntensity={.05} roughness={.1} metalness={0} />
    </mesh>
    <mesh position={[0, -2.4, 0]}>
        <cylinderGeometry args={[10.5, 10.5, 2.5, 60]} />
        <meshStandardMaterial color="#1C2734" envMapIntensity={.05} roughness={.1} metalness={0} />
    </mesh>

    <mesh position={[-7, 1, 1.6]}>
        <RoundedBox receiveShadow castShadow smoothness={10} radius={0.05} scale={[4.2, 2, 2]}>
        <meshStandardMaterial color="#FFC300" envMapIntensity={0.05} roughness={0} metalness={0} />
        </RoundedBox>
        <Text position={[.5, 0, 1.01]} fontSize={1} color="black" anchorX="center" anchorY="middle">
        JS
        </Text>
    </mesh>

    <mesh position={[3, 0.8, 5]} rotation={[0, .4, 0]} castShadow>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#29B6F6" envMapIntensity={0.5} roughness={0.2} metalness={0.5} />
        <Text position={[-.3, 0, .75]} rotation={[0, -0.4, 0]} fontSize={0.3} color="black" anchorX="center" anchorY="middle">
        PHP
        </Text>
    </mesh>

    <mesh castShadow rotation-x={-Math.PI / 2} position={[8, 1.01, 2]} scale={[2, 2, 2]}>
        <boxGeometry args={[1, 1, 1, 4, 4, 4]} />
        <meshStandardMaterial color="#943126" envMapIntensity={0.5} roughness={0} metalness={0} wireframe />
    </mesh>

    {/* Escalera */}
    <mesh position={[0, -.009, -1.9]}>
        <boxGeometry args={[16.5, .3, 3.5]}/>
        <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={.2} metalness={0}  />
    </mesh>
    <mesh position={[0, .2, -1.3]}>
        <boxGeometry args={[15.5, .3, 2.2]}/>
        <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={.2} metalness={0}  />
    </mesh>

    {/* piso */}
    <mesh position={[12, -19.2, -9]} >
        <boxGeometry args={[20, .4, 20]}/>
        <meshStandardMaterial color="BurlyWood" envMapIntensity={.05} roughness={.02} metalness={2}  />
    </mesh>
</group>
)
}
