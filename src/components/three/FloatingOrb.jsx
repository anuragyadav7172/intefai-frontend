import { Float } from "@react-three/drei";

const FloatingOrb = ({ position = [0, 0, 0], color = "#00E5FF" }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
};

export default FloatingOrb;
