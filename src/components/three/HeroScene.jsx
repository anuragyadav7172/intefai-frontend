import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FloatingOrb from "./FloatingOrb";

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 60 }}
      dpr={[1, 1.5]}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <FloatingOrb position={[-1.2, 0.5, 0]} color="#00E5FF" />
      <FloatingOrb position={[1.2, -0.5, 0]} color="#7C4DFF" />
      <FloatingOrb position={[0, 0.8, -0.5]} color="#00FFC6" />

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default HeroScene;
