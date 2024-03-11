import { useGLTF } from "@react-three/drei";
import tangan from '../../assets/3D/tangan.glb';
import adjusctScale from "../../func/adjustScale";

const Tangan = () => {
    const gltf = useGLTF(tangan);
    return <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />;
  };

export default Tangan;