import { useAnimations, useGLTF } from "@react-three/drei";
import { forwardRef, useEffect } from "react";
import maskot from "../../assets/3D/maskot.glb";
import adjusctScale from "../../constant/adjustScale";
import { useFrame } from "@react-three/fiber";

const Maskot = forwardRef(() => {
  const gltf = useGLTF(maskot);

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

  useFrame((state, delta, _) => {
    window.innerWidth < 768
      ? (ref.current.position.y =
          -3 + Math.sin(state.clock.elapsedTime * 2) + 0.5)
      : (ref.current.position.y = -4 + Math.sin(state.clock.elapsedTime * 2));
  });


  const z = window.innerWidth < 768 ? 18 : 23;

  return (
    <group position={[0, 2.2, z]}>
      <group ref={ref} scale={adjusctScale()}>
        <primitive object={gltf.scene} key={gltf} position={[0, 0, 0]} />
      </group>
    </group>
  );
});

export default Maskot;
