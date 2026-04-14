'use client';

import { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars: Array<{ x: number; y: number; radius: number; opacity: number; twinkleSpeed: number }> = [];
    const starCount = 100;

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Floating planets
    const planets = [
      { x: 200, y: 200, radius: 40, color: '#3b82f6', speed: 0.0003 },
      { x: 600, y: 400, radius: 30, color: '#1e3a8a', speed: 0.0001 },
      { x: 1000, y: 300, radius: 25, color: '#60a5fa', speed: 0.00015 },
    ];

    let time = 0;

    const animate = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0f172a');
      gradient.addColorStop(0.5, '#1e293b');
      gradient.addColorStop(1, '#0f172a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and twinkle stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        ctx.fillStyle = `rgba(245, 245, 245, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw floating planets
      planets.forEach((planet, index) => {
        const offsetX = Math.sin(time * planet.speed + index) * 50;
        const offsetY = Math.cos(time * planet.speed + index) * 50;

        // Planet glow
        const glowGradient = ctx.createRadialGradient(
          planet.x + offsetX,
          planet.y + offsetY,
          0,
          planet.x + offsetX,
          planet.y + offsetY,
          planet.radius + 15
        );
        glowGradient.addColorStop(0, planet.color + '40');
        glowGradient.addColorStop(1, planet.color + '00');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(
          planet.x + offsetX,
          planet.y + offsetY,
          planet.radius + 15,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Planet
        ctx.fillStyle = planet.color;
        ctx.beginPath();
        ctx.arc(planet.x + offsetX, planet.y + offsetY, planet.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      time++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
