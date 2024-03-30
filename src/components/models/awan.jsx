import { useAnimations, useGLTF } from "@react-three/drei";
import awan from "../../assets/3D/awan2.glb";
import adjusctScale from "../../constant/adjustScale";
import { useEffect } from "react";
import { MeshBasicMaterial, MeshStandardMaterial, MeshToonMaterial } from "three";

const Awan = ({isNight}) => {
  const gltf = useGLTF(awan);
  const { ref, actions, names } = useAnimations(gltf.animations);

  useEffect(() => {
    names.forEach((name) => {
      actions[name].play();

      });

      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          if (isNight) {
            child.material = new MeshStandardMaterial({color: 0xffffff, clipShadows: true, emissive: 0x222222, emissiveIntensity: 1});
          } else {
            child.material = new MeshToonMaterial({color: 0xffffff, clipShadows: true});
          }
        }
    });
  }, []);

  return (
    <group ref={ref} castShadow receiveShadow>
      <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
    </group>
  );
};

export default Awan;
