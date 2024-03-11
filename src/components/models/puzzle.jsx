import { useGLTF } from "@react-three/drei";
import puzzle from '../../assets/3D/puzzle.glb';
import adjusctScale from "../../func/adjustScale";

const Puzzle = () => {
    const gltf = useGLTF(puzzle);
    return <primitive object={gltf.scene} key={gltf}  scale={adjusctScale()} />;
  };

export default Puzzle;