import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  layer: number;
}

export const InteractiveWaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
      radius: 200,
      active: false,
    };

    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleResize();

    const particleCount = Math.min(Math.floor((width * height) / 22000), 65);
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.6 + 0.2,
      layer: Math.floor(Math.random() * 3),
    }));

    const waveLayers = [
      {
        baseY: 0.38,
        amplitude: 65,
        frequency: 0.0018,
        speed: 0.0008,
        colorStart: 'rgba(14, 165, 233, 0.15)',
        colorEnd: 'rgba(56, 189, 248, 0.02)',
        accentColor: 'rgba(103, 232, 249, 0.35)',
        lineWidth: 1.8,
      },
      {
        baseY: 0.52,
        amplitude: 80,
        frequency: 0.0014,
        speed: 0.0011,
        colorStart: 'rgba(6, 182, 212, 0.18)',
        colorEnd: 'rgba(14, 116, 144, 0.03)',
        accentColor: 'rgba(56, 189, 248, 0.45)',
        lineWidth: 2.2,
      },
      {
        baseY: 0.68,
        amplitude: 70,
        frequency: 0.0022,
        speed: 0.0009,
        colorStart: 'rgba(251, 191, 36, 0.12)',
        colorEnd: 'rgba(245, 158, 11, 0.02)',
        accentColor: 'rgba(252, 211, 77, 0.35)',
        lineWidth: 1.6,
      },
      {
        baseY: 0.82,
        amplitude: 55,
        frequency: 0.0016,
        speed: 0.0007,
        colorStart: 'rgba(56, 189, 248, 0.12)',
        colorEnd: 'rgba(2, 6, 23, 0.0)',
        accentColor: 'rgba(103, 232, 249, 0.25)',
        lineWidth: 1.4,
      },
    ];

    let time = 0;

    const render = () => {
      time += 1;

      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      const prevScrollY = scrollY;
      scrollY += (targetScrollY - scrollY) * 0.08;
      scrollVelocity = Math.abs(scrollY - prevScrollY);

      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#030712');
      bgGrad.addColorStop(0.5, '#050c1e');
      bgGrad.addColorStop(1, '#020617');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      if (mouse.active) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          10,
          mouse.x,
          mouse.y,
          320
        );
        mouseGlow.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
        mouseGlow.addColorStop(0.5, 'rgba(6, 182, 212, 0.04)');
        mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      waveLayers.forEach((layer, layerIdx) => {
        const baseHeight = height * layer.baseY + (scrollY * 0.12 * (layerIdx + 1));
        const currentAmp = layer.amplitude + Math.min(scrollVelocity * 1.5, 35);

        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseHeight);

        const step = 8;
        const wavePoints: { x: number; y: number }[] = [];

        for (let x = 0; x <= width + step; x += step) {
          const wave1 = Math.sin(x * layer.frequency + time * layer.speed + layerIdx);
          const wave2 = Math.cos(x * layer.frequency * 1.6 - time * layer.speed * 0.8);
          const wave3 = Math.sin((x + scrollY * 0.5) * 0.003 + time * 0.001);

          let y = baseHeight + (wave1 * 0.6 + wave2 * 0.3 + wave3 * 0.1) * currentAmp;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = 1 - dist / mouse.radius;
            const angle = Math.atan2(dy, dx);
            y += Math.sin(angle * 2 + time * 0.05) * force * 35;
          }

          wavePoints.push({ x, y });
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const fillGrad = ctx.createLinearGradient(0, baseHeight - currentAmp, 0, height);
        fillGrad.addColorStop(0, layer.colorStart);
        fillGrad.addColorStop(1, layer.colorEnd);
        ctx.fillStyle = fillGrad;
        ctx.fill();

        ctx.beginPath();
        for (let i = 0; i < wavePoints.length; i++) {
          const pt = wavePoints[i];
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = layer.accentColor;
        ctx.lineWidth = layer.lineWidth;
        ctx.shadowColor = layer.accentColor;
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy - scrollVelocity * 0.05;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * 1.5;
          p.y += Math.sin(angle) * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const particleColor =
          p.layer === 2
            ? `rgba(251, 191, 36, ${p.alpha})`
            : p.layer === 1
            ? `rgba(103, 232, 249, ${p.alpha})`
            : `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fillStyle = particleColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 85) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - distNodes / 85) * 0.12;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
