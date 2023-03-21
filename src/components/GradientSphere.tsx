import { Sphere } from "@react-three/drei";
import { LayerMaterial, Depth, DebugLayerMaterial } from "lamina";
import { useControls } from "leva";
import { Dragon } from "./Dragon";

export default function GradientSphere() {
  return (
    <Sphere>
      <DebugLayerMaterial color="#ffffff">
        <Depth
          colorA="#810000" //
          colorB="#ffd0d0"
          alpha={0.5}
          mode="multiply"
          near={0}
          far={2}
          origin={[1, 1, 1]}
        />
      </DebugLayerMaterial>
    </Sphere>
  );
}
