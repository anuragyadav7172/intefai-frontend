import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import FloatingSocialIcon from "./FloatingSocialIcon";
import { socialLinks } from "@/constants/socialLinks";

const ParallaxGroup = () => {
  const scroll = useScroll();

  useFrame((state) => {
    state.scene.position.y = scroll.offset * 2;
  });

  return (
    <>
      {socialLinks.map((social, index) => (
        <FloatingSocialIcon
          key={social.id}
          icon={social.icon}
          position={[
            (index - 1.5) * 2,
            index % 2 === 0 ? 0.5 : -0.5,
            -index * 1.2, // depth layering
          ]}
          scale={0.9}
          speed={0.4 + index * 0.15}
        />
      ))}
    </>
  );
};

const SocialParallaxScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ParallaxGroup />
    </Canvas>
  );
};

export default SocialParallaxScene;
