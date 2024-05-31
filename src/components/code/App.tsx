import React, { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import HomeScene from '@/scenes/HomeScene';
import Loader from '@/components/code/Loader';
import { Suspense } from 'react';


const CameraController: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const MAX_DESCENT = 2.5; // Y mínimo al que puede descender la cámara
  const DESCENT_SPEED = 20; // Velocidad de descenso
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame((state) => {
    const t = scrollY / window.innerHeight;
    const radius = 55;

    // Calcular el ángulo para la rotación (hasta 180 grados)
    let angle = Math.min(Math.PI, t * Math.PI);
    let x = radius * Math.sin(angle);
    let z = radius * Math.cos(angle);

    // Calcular la posición Y de la cámara
    let currentY = 20;

    // Después de completar la rotación (t >= 1), comenzar a descender
    if (t >= 1) {
      const descendT = t - 1; // Ajustar t para comenzar desde 0 después de completar la rotación
      currentY = MAX_DESCENT - descendT * DESCENT_SPEED;
      currentY = Math.max(currentY, -20); // Ajustar el valor mínimo permitido para currentY
    }

    state.camera.position.set(x, currentY, z);

    // Ajustar la orientación de la cámara
    if (t >= 1) {
      state.camera.lookAt(x, currentY, z + 1);
    } else {
      state.camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

const App: React.FC = () => {
  const [sceneLoaded, setSceneLoaded] = useState(false);

  return (
    <>
      <Canvas className='canva' shadows camera={{ position: [7, 15, 60], fov: 15 }}>
        <Suspense fallback={<Loader onLoaded={() => setSceneLoaded(true)} />}>
          <CameraController />
          <HomeScene onSceneLoaded={() => setSceneLoaded(true)} />
        </Suspense>
      </Canvas>
      {sceneLoaded && (
        <>
          <div className='App titillium-web-black'>
            <section className='hero name'>
              <h1>Josue Ojeda</h1>
              <h2>Ingenieria en Informatica</h2>
              <h5>casi ingeniero: 5/9</h5>
            </section>
          </div>

          <div className='App1 titillium-web-black'>
            <section className='works hero1'>
              <h2>Proyectos creados</h2>
            </section>
          </div>
          <div className='App2 titillium-web-black'>
            <section className='works hero2'>
              <h3>Como ingeniero en informática, mi perfil se distingue por una combinación única de habilidades técnicas y cualidades personales que reflejan mi enfoque multifacético y mi búsqueda constante de excelencia. Mi dominio en lenguajes como JavaScript y PHP, junto con mi capacidad para abordar desafíos complejos con un pensamiento crítico y una resolución de problemas innovadora, demuestran mi competencia técnica y mi adaptabilidad en entornos tecnológicos cambiantes. </h3>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default App;
