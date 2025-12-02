import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";


export function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;

      constructor() {
        this.x = (Math.random() - 0.5) * 400;
        this.y = (Math.random() - 0.5) * 400;
        this.z = (Math.random() - 0.5) * 400;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        // Wrap around
        if (Math.abs(this.x) > 200) this.x *= -0.5;
        if (Math.abs(this.y) > 200) this.y *= -0.5;
        if (Math.abs(this.z) > 200) this.z *= -0.5;
      }

      project(width: number, height: number) {
        const scale = 300 / (300 + this.z);
        return {
          x: this.x * scale + width / 2,
          y: this.y * scale + height / 2,
          scale: scale,
        };
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 200; i++) {
      particles.push(new Particle());
    }

    let rotation = 0;
    let ringRotation = 0;

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      rotation += 0.005;
      ringRotation += 0.003;

      // Draw central sphere with gradient
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = 80;

      // Main sphere
      const gradient = ctx.createRadialGradient(
        centerX - 20,
        centerY - 20,
        10,
        centerX,
        centerY,
        radius
      );
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
      gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.6)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0.2)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Glow effect
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 20, 0, Math.PI * 2);
      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius,
        centerX,
        centerY,
        radius + 20
      );
      glowGradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
      glowGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Draw orbiting rings
      for (let i = 0; i < 3; i++) {
        const angle = ringRotation + (i * Math.PI * 2) / 3;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);
        
        ctx.beginPath();
        ctx.ellipse(0, 0, 120, 30, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 + i * 0.1})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.restore();
      }

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.update();
        const projected = particle.project(width, height);

        const opacity = (projected.scale * 0.6).toFixed(2);
        const size = projected.scale * 2;

        ctx.beginPath();
        ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const projected2 = p2.project(width, height);
          const dx = projected.x - projected2.x;
          const dy = projected.y - projected2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(projected.x, projected.y);
            ctx.lineTo(projected2.x, projected2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Decorative rotating circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-64 h-64 rounded-full border-2 border-indigo-500/20" />
      </motion.div>
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-80 h-80 rounded-full border-2 border-purple-500/20" />
      </motion.div>
    </div>
  );
}
