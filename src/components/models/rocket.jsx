import { useGLTF } from "@react-three/drei";
import rocket from '../../assets/3D/rocket.glb';
import adjusctScale from "../../func/adjustScale";

const Rocket = () => {
    const gltf = useGLTF(rocket);
    return <primitive object={gltf.scene} key={gltf} scale={adjusctScale()} />;
  };

export default Rocket;