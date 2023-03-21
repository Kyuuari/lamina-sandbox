import {
  Backdrop,
  Grid,
  OrbitControls,
  SpotLight,
  Stage,
} from "@react-three/drei";
import { useControls } from "leva";
import React from "react";
import { Dragon } from "./Dragon";
import GradientSphere from "./GradientSphere";

type Props = {};

const Experience = (props: Props) => {
  return (
    <>
      <OrbitControls />
      {/* <SpotLight
        position={[0, 3, 0]}
        distance={10}
        angle={0.15}
        attenuation={5}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      /> */}
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{ type: "accumulative", colorBlend: 2, opacity: 2 }}
        adjustCamera={0.9}
      >
        <Dragon />
        {/* <GradientSphere /> */}
      </Stage>
      <Backdrop
        receiveShadow
        scale={[20, 5, 5]}
        floor={1.5}
        position={[0, -1.5, -2]}
        segments={20} // Mesh-resolution, 20 by default
      >
        <meshStandardMaterial color="#353540" />
      </Backdrop>
      <Grid cellColor="white" args={[10, 10]} />
    </>
  );
};

export default Experience;
