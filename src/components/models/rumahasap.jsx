import { useGLTF } from "@react-three/drei";
import rumahAsap from '../../assets/3D/rumahasap.glb';
import adjusctScale from "../../func/adjustScale";

const RumahAsap = () => {
    const gltf = useGLTF(rumahAsap);
    return <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />;
  };

export default RumahAsap;