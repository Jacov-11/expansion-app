import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Create the scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2; // Position the camera closer

    // Create a renderer with transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Set background to transparent
    mount.appendChild(renderer.domElement);

    // Create materials
    const materialRed = new THREE.MeshBasicMaterial({ color: 0xe75336 });
    const materialWhite = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xe75336 });

    // Create a group to hold the smaller cubes
    const group = new THREE.Group();

    // Create 8 smaller cubes, each half the size of the larger cube
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5); // Smaller cube size
    const positions = [
      [-0.25, 0.25, 0.25], [0.25, 0.25, 0.25],
      [-0.25, -0.25, 0.25], [0.25, -0.25, 0.25],
      [-0.25, 0.25, -0.25], [0.25, 0.25, -0.25],
      [-0.25, -0.25, -0.25], [0.25, -0.25, -0.25]
    ];
    const materials = [
      materialRed, materialWhite,
      materialWhite, materialRed,
      materialWhite, materialRed,
      materialRed, materialWhite
    ];

    for (let i = 0; i < 8; i++) {
      const cube = new THREE.Mesh(geometry, materials[i]);
      cube.position.set(...positions[i]);

      if (materials[i] === materialWhite) {
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, edgeMaterial);
        cube.add(line);
      }

      group.add(cube);
    }

    // Add the group of cubes to the scene
    scene.add(group);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.x += 0.01;
      group.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
}
