import { useRef } from "react";
import adjusctScale from "../../constant/adjustScale";
import Bird1 from "./burung/bird1";
import Bird2 from "./burung/bird2";
import Bird3 from "./burung/bird3";
import Bird4 from "./burung/bird4";
import Bird5 from "./burung/bird5";
import { useFrame } from "@react-three/fiber";

const Burung = () => {
  const burungRef = useRef();

  useFrame((state, delta, _) => {
    burungRef.current.position.y = Math.sin(state.clock.elapsedTime) * 3;
  })

  return (
    <group scale={adjusctScale()} ref={burungRef}>
      <Bird1 position={[-2, 0, 0]} />
      <Bird2 position={[1, 0, 0]} />
      <Bird3 position={[2, 2, -3]} />
      <Bird4 position={[-2, 2, 3]} />
      <Bird5 position={[1, 1.5, 2]} />
    </group>
  );
};

export default Burung;
