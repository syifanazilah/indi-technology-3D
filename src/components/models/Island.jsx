import { useGLTF } from "@react-three/drei";
import island from '../../assets/3D/scene.glb';
import adjusctScale from "../../func/adjustScale";

const Island = () => {
    const gltf = useGLTF(island);
    return <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />;
  };

export default Island;