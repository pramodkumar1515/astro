"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
function Orbits(){const g=useRef<THREE.Group>(null);useFrame((_,d)=>{if(g.current)g.current.rotation.z+=d*.025});return <group ref={g}>{[2.2,3.2,4.2].map((r,i)=><mesh key={r} rotation={[Math.PI/2+i*.12,0,i*.3]}><torusGeometry args={[r,.008,8,160]}/><meshBasicMaterial color="#C9A35D" transparent opacity={.34}/></mesh>)}<mesh><icosahedronGeometry args={[1.25,2]}/><meshBasicMaterial color="#EA7917" wireframe transparent opacity={.14}/></mesh></group>}
export default function VedicCosmos(){return <Canvas dpr={[1,1.5]} camera={{position:[0,0,7],fov:50}}><ambientLight intensity={.5}/><Stars radius={60} depth={30} count={900} factor={2} saturation={0} fade speed={.25}/><Orbits/></Canvas>}