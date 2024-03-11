import { useGLTF } from "@react-three/drei";
import rumah from '../../assets/3D/rumah.glb';
import adjusctScale from "../../func/adjustScale";

const Rumah = () => {
    const gltf = useGLTF(rumah);
    return (
      <group>
        <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />
      </group>
    );
  };

export default Rumah;