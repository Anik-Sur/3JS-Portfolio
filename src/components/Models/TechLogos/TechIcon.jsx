import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Three JS") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshPhongMaterial({ color: "white" });
        }
      });
    }
    if (model.name === "Angular") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshBasicMaterial({ color: "#ad2b2b" });
        }
      });
    }
    if (model.name === "Java Spring Boot") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Node1") {
          child.material = new THREE.MeshPhongMaterial({ color: "#6daa3f" });
        }
      });
    }
  }, [scene]);

  return (
    <Canvas>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[5, -5, 5]} intensity={1} />
      <directionalLight position={[5, 5, -5]} intensity={1} />
      <directionalLight position={[5, -5, -5]} intensity={1} />
      {/* <Environment preset="city" /> */}
      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
