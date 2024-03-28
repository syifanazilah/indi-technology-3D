import { useAnimations, useGLTF } from "@react-three/drei";
import island from "../../assets/3D/scene.glb";
import adjusctScale from "../../constant/adjustScale";
import { useEffect } from "react";

const Island = ({ ...props }) => {
  const gltf = useGLTF(island);

  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    actions[names[0]].play();
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        // child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [actions, names]);

  return (
    <group ref={ref} receiveShadow {...props}>
      <primitive
        object={gltf.scene}
        key={gltf}
        scale={adjusctScale()}
        receiveShadow
      />
    </group>
  );
};

export default Island;
