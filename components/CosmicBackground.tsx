'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Array<{ x: number; y: number; radius: number; opacity: number; twinkleSpeed: number }> = [];
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        opacity: Math.random() * 0.5 + 0.1,
        twinkleSpeed: Math.random() * 0.01 + 0.002,
      });
    }

    const animate = () => {
      if (resolvedTheme === 'dark') {
        // Create a deep space gradient
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width
        );
        gradient.addColorStop(0, '#0f0a1e'); // Deeper purple center
        gradient.addColorStop(0.5, '#05070a'); // Darker mid
        gradient.addColorStop(1, '#020305'); // Almost black edges
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = '#fdfaf5';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);
        star.opacity = Math.max(0.1, Math.min(0.8, star.opacity));

        // Brighter Golden stars
        ctx.fillStyle = resolvedTheme === 'dark' 
          ? `rgba(255, 215, 130, ${star.opacity})` 
          : `rgba(197, 160, 89, ${star.opacity * 0.4})`;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow to brighter stars
        if (star.opacity > 0.6 && resolvedTheme === 'dark') {
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'rgba(255, 215, 130, 0.4)';
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-100 pointer-events-none"
    />
  );
}
