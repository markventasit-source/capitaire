"use client";
import { useEffect, useRef } from "react";

export default function WavyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const lines = 3;
      for (let l = 0; l < lines; l++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${0.6 - l * 0.15})`;
        ctx.lineWidth = 1.5;
        const amplitude = 15 + l * 5;
        const wavelength = 200;
        const speed = 0.02 + l * 0.01;
        const yOffset = canvas.height / 2 + l * 15;

        for (let x = 0; x <= canvas.width; x++) {
          const y =
            yOffset +
            Math.sin(x / wavelength + frame * speed) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      frame++;
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-40" />;
}