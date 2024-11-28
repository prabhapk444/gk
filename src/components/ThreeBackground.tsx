import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../hooks/useTheme';

export const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const size = 2000;

    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * size;
      const y = (Math.random() - 0.5) * size;
      const z = (Math.random() - 0.5) * size;
      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
      size: 2,
      color: theme === 'dark' ? 0xffffff : 0x000000,
      transparent: true,
      opacity: 0.5,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 500;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.0003;
      points.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [theme]);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};