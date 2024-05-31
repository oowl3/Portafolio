import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import '../../styles/Loader.css';

interface LoaderProps {
  onLoaded: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoaded }) => {
  const { progress } = useProgress();

  React.useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return (
    <Html center>
      <div className="loader-container">
        <h1>Portafolio Web</h1>
        <div className="spinner"></div>
        <div className="progress-bar">
          <div
            className="progress-bar-inner"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="loading-text">Cargando: {progress.toFixed(2)}%</div>
      </div>
    </Html>
  );
};

export default Loader;

