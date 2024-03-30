import { useControls } from "leva";

const Matahari = () => {
  const { position } = useControls({
    position: {
      value: [0, 15, 0],
      step: 0.1,
    },
  });

  return (
    <>
      {/* <pointLight intensity={1000} position={position} color={0xfff3d5} /> */}
      <mesh position={position} scale={1}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial emissive={0xfff3d5} emissiveIntensity={0.5} />
      </mesh>
    </>
  );
};

export default Matahari;
