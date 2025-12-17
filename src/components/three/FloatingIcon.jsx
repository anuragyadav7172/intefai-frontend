import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const FloatingIcon = ({ icon, position, depth = 1 }) => {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, icon);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    meshRef.current.position.y =
      position[1] + Math.sin(clock.elapsedTime + depth) * 0.2;

    meshRef.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

export default FloatingIcon;
