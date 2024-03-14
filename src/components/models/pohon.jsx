import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import pohon from "../../assets/3D/pohon.glb";
import adjusctScale from "../../constant/adjustScale";

const Pohon = () => {
  const gltf = useGLTF(pohon);

  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    names.forEach((name) => {
      actions[name].play();
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    });
  }, [actions, names]);

  return (
    <group ref={ref} castShadow >
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
    </group>
  );
};

export default Pohon;
