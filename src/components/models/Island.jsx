import { useAnimations, useGLTF } from "@react-three/drei";
import island from "../../assets/3D/scene.glb";
import adjusctScale from "../../func/adjustScale";
import { useEffect } from "react";
import { AnimationMixer } from "three";
import Pohon from "./pohon";
import Burung from "./burung";
// import { Burung1 } from "./burung1";

const Island = () => {
  const gltf = useGLTF(island);

  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    actions[names[0]].play();
  }, [actions, names]);

  return (
    <group ref={ref} castShadow receiveShadow>
      <Pohon />
      <Burung />
      <primitive
        object={gltf.scene}
        key={gltf}
        scale={adjusctScale()}
        castShadow
        receiveShadow
      />
    </group>
  );
};

export default Island;
