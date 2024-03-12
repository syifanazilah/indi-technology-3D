import { useAnimations, useGLTF } from "@react-three/drei";
import puzzle from "../../assets/3D/puzzle.glb";
import adjusctScale from "../../func/adjustScale";
import { useEffect } from "react";

const Puzzle = () => {
  const gltf = useGLTF(puzzle);
  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    names.forEach((name) => {
      actions[name].play();
    })
  }, [actions, names]);

  return (
    <group ref={ref}>
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
    </group>
  );
};

export default Puzzle;
