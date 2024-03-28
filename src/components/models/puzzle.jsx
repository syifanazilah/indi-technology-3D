import { useAnimations, useGLTF } from "@react-three/drei";
import puzzle from "../../assets/3D/puzzle.glb";
import adjusctScale from "../../constant/adjustScale";
import { useEffect } from "react";

const Puzzle = () => {
  const gltf = useGLTF(puzzle);
  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    names.forEach((name) => {
      actions[name].play();
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          // child.receiveShadow = true;
        }
      });
    })
  }, [actions, names]);

  return (
    <group ref={ref}>
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
    </group>
  );
};

export default Puzzle;
