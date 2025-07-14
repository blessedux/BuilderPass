'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  Text, 
  Float, 
  OrbitControls, 
  PerspectiveCamera, 
  Environment,
  useTexture,
  RoundedBox,
  Box
} from '@react-three/drei'
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import * as THREE from 'three'

interface UserInfo {
  name: string
  username: string
  cherryScore: number
  role: string
  location: string
  skills: string[]
  achievements: string[]
  avatar?: string
}

interface CredentialBadgeProps {
  userInfo: UserInfo
  className?: string
}

function FloatingParticles() {
  const particles = useRef<THREE.Points>(null)
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.elapsedTime * 0.1
      particles.current.rotation.x = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={new Float32Array(1000 * 3).map(() => (Math.random() - 0.5) * 10)}
          itemSize={3}
          args={[new Float32Array(1000 * 3).map(() => (Math.random() - 0.5) * 10), 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#8b5cf6" transparent opacity={0.6} />
    </points>
  )
}

function BadgeCard({ userInfo }: { userInfo: UserInfo }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = hovered ? Math.sin(state.clock.elapsedTime * 2) * 0.1 : 0
      meshRef.current.rotation.x = hovered ? Math.cos(state.clock.elapsedTime * 1.5) * 0.05 : 0
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <RigidBody>
        <group
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setClicked(!clicked)}
          scale={hovered ? 1.05 : 1}
        >
          {/* Main Badge Card */}
          <RoundedBox
            args={[3, 4.5, 0.1]}
            radius={0.2}
            smoothness={4}
            bevelSegments={4}
            creaseAngle={0.4}
          >
            <meshStandardMaterial
              color={hovered ? "#1e1b4b" : "#0f0f23"}
              metalness={0.8}
              roughness={0.2}
            />
          </RoundedBox>

          {/* Gradient Overlay */}
          <RoundedBox
            args={[2.9, 4.4, 0.05]}
            radius={0.15}
            position={[0, 0, 0.06]}
          >
            <meshStandardMaterial
              color="#8b5cf6"
              transparent
              opacity={0.1}
              metalness={0.5}
              roughness={0.3}
            />
          </RoundedBox>

          {/* Header Section */}
          <group position={[0, 1.5, 0.1]}>
            <Text
              position={[0, 0.3, 0]}
              fontSize={0.3}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              BUILDER PASS
            </Text>
            <Text
              position={[0, -0.1, 0]}
              fontSize={0.15}
              color="#a1a1aa"
              anchorX="center"
              anchorY="middle"
            >
              Web3 Builder Credential
            </Text>
          </group>

          {/* Avatar Section */}
          <group position={[0, 0.5, 0.1]}>
            <RoundedBox
              args={[1.2, 1.2, 0.05]}
              radius={0.1}
              position={[0, 0, 0]}
            >
              <meshStandardMaterial
                color="#3b82f6"
                metalness={0.3}
                roughness={0.7}
              />
            </RoundedBox>
            <Text
              position={[0, -0.8, 0.1]}
              fontSize={0.25}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {userInfo.name}
            </Text>
            <Text
              position={[0, -1.1, 0.1]}
              fontSize={0.15}
              color="#8b5cf6"
              anchorX="center"
              anchorY="middle"
            >
              @{userInfo.username}
            </Text>
          </group>

          {/* Cherry Score */}
          <group position={[0, -0.3, 0.1]}>
            <Text
              position={[0, 0, 0]}
              fontSize={0.2}
              color="#fbbf24"
              anchorX="center"
              anchorY="middle"
            >
              🍒 {userInfo.cherryScore}
            </Text>
            <Text
              position={[0, -0.25, 0]}
              fontSize={0.12}
              color="#a1a1aa"
              anchorX="center"
              anchorY="middle"
            >
              Cherry Score
            </Text>
          </group>

          {/* Role and Location */}
          <group position={[0, -0.8, 0.1]}>
            <Text
              position={[0, 0, 0]}
              fontSize={0.14}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {userInfo.role}
            </Text>
            <Text
              position={[0, -0.2, 0]}
              fontSize={0.12}
              color="#a1a1aa"
              anchorX="center"
              anchorY="middle"
            >
              📍 {userInfo.location}
            </Text>
          </group>

          {/* Skills Preview */}
          <group position={[0, -1.4, 0.1]}>
            <Text
              position={[0, 0, 0]}
              fontSize={0.12}
              color="#10b981"
              anchorX="center"
              anchorY="middle"
            >
              {userInfo.skills.slice(0, 3).join(' • ')}
            </Text>
          </group>

          {/* Bottom Border */}
          <Box
            args={[2.8, 0.05, 0.05]}
            position={[0, -1.8, 0.1]}
          >
            <meshStandardMaterial
              color="#8b5cf6"
              metalness={0.8}
              roughness={0.2}
            />
          </Box>
        </group>
      </RigidBody>
    </Float>
  )
}

function Scene({ userInfo }: { userInfo: UserInfo }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        minDistance={5}
        maxDistance={15}
        autoRotate={false}
      />
      
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
      <Environment preset="city" />
      
      <Physics gravity={[0, -9.81, 0]}>
        <BadgeCard userInfo={userInfo} />
        <CuboidCollider args={[10, 0.1, 10]} position={[0, -3, 0]} />
      </Physics>
      
      <FloatingParticles />
    </>
  )
}

export function CredentialBadge({ userInfo, className }: CredentialBadgeProps) {
  return (
    <div className={`w-full h-[600px] ${className}`}>
      <Canvas>
        <Scene userInfo={userInfo} />
      </Canvas>
    </div>
  )
} 