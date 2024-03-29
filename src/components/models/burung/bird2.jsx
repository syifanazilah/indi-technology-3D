import { useAnimations, useGLTF } from "@react-three/drei";
import burung from "/burung/burung2.glb";
import adjusctScale from "../../../constant/adjustScale";
import { useEffect, useRef } from "react";
import { useNightContext } from "../../../context/nightContext";
import { MeshBasicMaterial } from "three";

const Bird2 = ({ position = [0, 0, 0] }) => {
  const birdRef = useRef();
  const { scene, animations, nodes } = useGLTF(burung);
  const { actions, names } = useAnimations(animations, birdRef);

  useEffect(() => {
    names.forEach((name) => {
      actions[name].play();
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    });
  }, [actions, names]);

  const { isNight } = useNightContext();
  useEffect(() => {
    if (isNight) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshBasicMaterial({
            color: 0xc2c2c2,
            toneMapped: false,
          });
        }
      });
    }
  }, []);

  return (
    <group castShadow receiveShadow>
      <group ref={birdRef}>
        <primitive
          object={scene}
          key={nodes}
          position={position}
          scale={adjusctScale()}
        />
      </group>
    </group>
  );
};

export default Bird2;
