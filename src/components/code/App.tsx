import React, { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import HomeScene from '@/scenes/HomeScene';
import Loader from '@/components/code/Loader';
import { Suspense } from 'react';

const CameraController: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const MAX_DESCENT = 2.5;
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

    if (t >= 1) {
      const descendT = t - 1; 
      currentY = MAX_DESCENT - descendT * DESCENT_SPEED;
      currentY = Math.max(currentY, -20); 
    }

    state.camera.position.set(x, currentY, z);

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
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerWidth < window.innerHeight);
    };

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    // Verifica la orientación al cargar la página
    checkOrientation();

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return (
    <>
      {isPortrait ? (
        <div id="orientation-warning" className='titillium-web-light'>
          <p>Por favor, gire su dispositivo a modo horizontal.</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M516-191 191-516q-18-20-18-46t18-46l166-165q18-20 44.99-20 26.99 0 47.01 20l325 325q19 19 19 46t-19 46L608-191q-18 20-44.99 20-26.99 0-47.01-20Zm46-39 172-172-331-332-172 172 331 332ZM478 1q-98.51 0-185.58-37.5-87.07-37.5-152.24-103Q75-205 37.5-292.18T0-478h60q0 80 28.5 151.5t78.5 127Q217-144 285.5-109T433-66L303-196l43-43L574-11q-23 7-47.48 9.5Q502.04 1 478 1Zm422-479q0-80-28-151.5T794.5-757Q745-813 677-848.5T530-892l128 128-43 43-228-228q23-6 45.5-8.5T478-960q100 0 187.5 38t153 103.5Q884-753 922-665.5T960-478h-60Zm-417-4Z"/></svg>
        </div>
      ) : (
        <>
          <Canvas className='canva' shadows camera={{ position: [7, 15, 60], fov: 15 }}>
            <Suspense fallback={<Loader onLoaded={() => setSceneLoaded(true)} />}>
              <CameraController />
              <HomeScene onSceneLoaded={() => setSceneLoaded(true)} />
            </Suspense>
          </Canvas>
          {sceneLoaded && (
            <>
              <div className="App titillium-web-black">
                <section className="hero name">
                  <h1>Josue Ojeda</h1>
                  <h2>Ingeniería en Informática</h2>
                  <h5>Casi ingeniero: 5/9</h5>
                </section>
              </div>

              <div className="App1 titillium-web-black">
                <section className="works hero1">
                  <h2>Proyectos creados</h2>
                </section>
              </div>
              <div className="App2 titillium-web-black">
                <section className="works hero2">
                  <h3>Como ingeniero en informática, mi perfil se distingue por una combinación única de habilidades técnicas y cualidades personales que reflejan mi enfoque multifacético y mi búsqueda constante de excelencia. Mi dominio en lenguajes como JavaScript y PHP, junto con mi capacidad para abordar desafíos complejos con un pensamiento crítico y una resolución de problemas innovadora, demuestran mi competencia técnica y mi adaptabilidad en entornos tecnológicos cambiantes.</h3>
                </section>
              </div>

              <div className="App3 titillium-web-bold">
                <footer className="works hero">
                  <p>© 2024 Josue Ojeda</p>
                </footer>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default App;
