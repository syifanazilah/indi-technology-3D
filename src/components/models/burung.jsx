import { useAnimations, useGLTF } from "@react-three/drei";
import burung from "../../assets/3D/burung.glb";
import adjusctScale from "../../constant/adjustScale";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Burung = () => {
  const ref = useRef();
  const { scene, nodes, animations } = useGLTF(burung);

  return (
    <group castShadow receiveShadow>
      <group ref={ref}>
        <primitive object={scene} key={nodes} position={[0, 0, 0]} />
      </group>
    </group>
  );
};

export default Burung;
