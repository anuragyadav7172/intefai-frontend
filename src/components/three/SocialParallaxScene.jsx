import { Canvas } from "@react-three/fiber";
import FloatingIcon from "./FloatingIcon";

const SocialParallaxScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      className="absolute inset-0 -z-10"
    >
      <ambientLight intensity={1} />

      <FloatingIcon
        icon="/src/assets/icons/linkedin.svg"
        position={[-2.5, 1.2, -1]}
        depth={1}
      />

      <FloatingIcon
        icon="/src/assets/icons/instagram.svg"
        position={[2.5, 0.8, -2]}
        depth={2}
      />

      <FloatingIcon
        icon="/src/assets/icons/x.svg"
        position={[-1.5, -1.5, -3]}
        depth={3}
      />

      <FloatingIcon
        icon="/src/assets/icons/youtube.svg"
        position={[1.8, -1.2, -2.5]}
        depth={2.5}
      />
    </Canvas>
  );
};

export default SocialParallaxScene;
