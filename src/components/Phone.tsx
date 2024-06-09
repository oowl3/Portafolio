import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

type GLTFResult = { nodes: {Circle038: THREE.Mesh,Circle038_1: THREE.Mesh,Circle038_2: THREE.Mesh,Circle038_3: THREE.Mesh,Circle038_4: THREE.Mesh,AntennaLineTop001: THREE.Mesh,AntennaLineBottom001: THREE.Mesh,BackCameraBottomLens001: THREE.Mesh,BackCameraP1001: THREE.Mesh,FlashBG001: THREE.Mesh,FrontCameraContainer001: THREE.Mesh,AppleLogo001: THREE.Mesh,BackCameraBottomGreyRing001: THREE.Mesh,BackCameraTopGreyRing001: THREE.Mesh,CameraBump001: THREE.Mesh,BackCameraTopLens001: THREE.Mesh,FrontSpeakerBG001: THREE.Mesh,MuteSwitch001: THREE.Mesh,Circle032: THREE.Mesh,Circle032_1: THREE.Mesh,Circle031: THREE.Mesh,Circle031_1: THREE.Mesh,iPhoneLogo001: THREE.Mesh,VolumeButtons001: THREE.Mesh,SCREEN: THREE.Mesh}
    materials: {['FrameGrey.001']: THREE.MeshStandardMaterial,['Front.001']: THREE.MeshStandardMaterial,['Antennaline.001']: THREE.MeshStandardMaterial,['BackGrey.001']: THREE.MeshStandardMaterial,['Rubber.001']: THREE.MeshStandardMaterial,['Lens.001']: THREE.MeshStandardMaterial,['Black.015']: THREE.MeshStandardMaterial,['PinkFlash.002']: THREE.MeshStandardMaterial,['FrontCameraBlack.002']: THREE.MeshStandardMaterial,['AppleLogo.001']: THREE.MeshStandardMaterial,['BackCaneraGrayRIng.002']: THREE.MeshStandardMaterial,['Frame.001']: THREE.MeshStandardMaterial,['FrontSpeaker.001']: THREE.MeshStandardMaterial,['Black.014']: THREE.MeshStandardMaterial,['iPhoneLogo.001']: THREE.MeshStandardMaterial,['Display.002']: THREE.MeshStandardMaterial}}

export default function Model16(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf') as unknown as GLTFResult;
    return (
        <group ref={group} {...props} scale={.2} rotation={[Math.PI/2, Math.PI,Math.PI/2.4]} >
            <group position={[0, 1.56, 0,]} >
                <mesh geometry={nodes.Circle038.geometry} material={nodes.Circle038.material} />
                <mesh geometry={nodes.Circle038_1.geometry} material={materials['Front.001']} />
                <mesh geometry={nodes.Circle038_2.geometry} material={nodes.Circle038_2.material} />
                <mesh geometry={nodes.Circle038_3.geometry} material={materials['BackGrey.001']} />
                <mesh geometry={nodes.Circle038_4.geometry} material={materials['Rubber.001']} />
                <mesh geometry={nodes.AntennaLineTop001.geometry} material={nodes.AntennaLineTop001.material} position={[0, 0.02, 0,]} />
                <mesh geometry={nodes.AntennaLineBottom001.geometry} material={nodes.AntennaLineBottom001.material} position={[0, -2.68, 0,]} />
                <mesh geometry={nodes.BackCameraBottomLens001.geometry} material={nodes.BackCameraBottomLens001.material} position={[0.7, 0.88, -0.08,]} />
                <mesh geometry={nodes.BackCameraP1001.geometry} material={materials['Black.015']} position={[0.7, 1.03, -0.09,]} />
                <mesh geometry={nodes.FlashBG001.geometry} material={materials['PinkFlash.002']} position={[0.71, 1.03, -0.09,]} />
                <mesh geometry={nodes.FrontCameraContainer001.geometry} material={materials['FrontCameraBlack.002']} position={[0.34, 1.32, 0.08,]} />
                <mesh geometry={nodes.AppleLogo001.geometry} material={materials['AppleLogo.001']} position={[0.17, 0.52, -0.08,]} />
                <mesh geometry={nodes.BackCameraBottomGreyRing001.geometry} material={nodes.BackCameraBottomGreyRing001.material} position={[0.7, 0.88, -0.09,]} />
                <mesh geometry={nodes.BackCameraTopGreyRing001.geometry} material={nodes.BackCameraTopGreyRing001.material} position={[0.7, 1.18, -0.09,]} />
                <mesh geometry={nodes.CameraBump001.geometry} material={nodes.CameraBump001.material} position={[0.7, 1.04, -0.08,]} />
                <mesh geometry={nodes.BackCameraTopLens001.geometry} material={nodes.BackCameraTopLens001.material} position={[0.7, 1.18, -0.08,]} />
                <mesh geometry={nodes.FrontSpeakerBG001.geometry} material={materials['FrontSpeaker.001']} position={[0.16, 1.32, 0.08,]} />
                <mesh geometry={nodes.MuteSwitch001.geometry} material={nodes.MuteSwitch001.material} position={[-0.65, 0.92, 0.01,]} />
                <group position={[0.97, 0.56, 0,]} >
                    <mesh geometry={nodes.Circle032.geometry} material={nodes.Circle032.material} />
                    <mesh geometry={nodes.Circle032_1.geometry} material={nodes.Circle032_1.material} />
                </group>
                <group position={[0.98, -0.04, 0,]} >
                    <mesh geometry={nodes.Circle031.geometry} material={materials['Black.014']} />
                    <mesh geometry={nodes.Circle031_1.geometry} material={nodes.Circle031_1.material} />
                </group>
                    <mesh geometry={nodes.iPhoneLogo001.geometry} material={materials['iPhoneLogo.001']} position={[0.2, -1.18, -0.08,]} />
                    <mesh geometry={nodes.VolumeButtons001.geometry} material={nodes.VolumeButtons001.material} position={[-0.66, 0.21, 0,]} />
                    <mesh geometry={nodes.SCREEN.geometry} material={materials['Display.002']} />
            </group>
        </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf');