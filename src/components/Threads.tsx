"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

import { cn } from "@/lib/utils";

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

function createFragmentShader(
  lineCount: number,
  lineWidth: number,
  lineBlur: number,
  patternOffset: number
) {
  return `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = ${lineCount};
const float u_line_width = ${lineWidth.toFixed(1)};
const float u_line_blur = ${lineBlur.toFixed(1)};
const float u_pattern_offset = ${patternOffset.toFixed(2)};

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float sampleX = st.x + u_pattern_offset;
    float split_offset = (perc * 0.35);
    float split_point = 0.04 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.5, sampleX);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.08, sampleX) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, sampleX + perc) * 2.5),
        Perlin2D(vec2(time_scaled, sampleX + time_scaled) * 3.5) / 1.5,
        sampleX * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.35))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        float widthScale = max(0.5, 1.0 - p * 0.55);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * widthScale,
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    float shadeMix = clamp(uv.y * 0.5 + colorVal * 0.5, 0.0, 1.0);
    vec3 shadedColor = mix(uColor, uColor2, shadeMix);
    fragColor = vec4(shadedColor * colorVal, colorVal);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;
}

interface ThreadsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  color?: [number, number, number];
  colorSecondary?: [number, number, number];
  amplitude?: number;
  distance?: number;
  lineCount?: number;
  lineWidth?: number;
  lineBlur?: number;
  patternOffset?: number;
  enableMouseInteraction?: boolean;
  interactionTargetRef?: React.RefObject<HTMLElement | null>;
}

export default function Threads({
  color = [132 / 255, 142 / 255, 163 / 255],
  colorSecondary = [165 / 255, 173 / 255, 188 / 255],
  amplitude = 1,
  distance = 1,
  lineCount = 72,
  lineWidth = 11,
  lineBlur = 12,
  patternOffset = 0.34,
  enableMouseInteraction = false,
  interactionTargetRef,
  className,
  ...rest
}: ThreadsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef(0);

  const propsRef = useRef({
    color,
    colorSecondary,
    amplitude,
    distance,
    enableMouseInteraction,
  });
  propsRef.current = {
    color,
    colorSecondary,
    amplitude,
    distance,
    enableMouseInteraction,
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerEl = container;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    containerEl.appendChild(gl.canvas);
    Object.assign(gl.canvas.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      display: "block",
    });

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: createFragmentShader(
        lineCount,
        lineWidth,
        lineBlur,
        patternOffset
      ),
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uColor: { value: new Color(...propsRef.current.color) },
        uColor2: { value: new Color(...propsRef.current.colorSecondary) },
        uAmplitude: { value: propsRef.current.amplitude },
        uDistance: { value: propsRef.current.distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const MAX_RENDER_DIM = 1920;
    function resize() {
      const { clientWidth, clientHeight } = containerEl;
      const baseDpr = Math.min(window.devicePixelRatio || 1, 2);
      const longestSide = Math.max(clientWidth, clientHeight) * baseDpr;
      const dpr =
        longestSide > MAX_RENDER_DIM
          ? (baseDpr * MAX_RENDER_DIM) / longestSide
          : baseDpr;
      renderer.dpr = dpr;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.iResolution.value.r = gl.canvas.width;
      program.uniforms.iResolution.value.g = gl.canvas.height;
      program.uniforms.iResolution.value.b = gl.canvas.width / gl.canvas.height;
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(containerEl);
    window.addEventListener("resize", resize);
    resize();

    const currentMouse = [0.5, 0.5];
    let targetMouse = [0.5, 0.5];

    const getInteractionRect = () => {
      const target = interactionTargetRef?.current ?? containerEl;
      return target.getBoundingClientRect();
    };

    function handleMouseMove(e: MouseEvent) {
      const rect = getInteractionRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        targetMouse = [0.5, 0.5];
        return;
      }
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      targetMouse = [x, y];
    }

    function handleContainerMouseLeave() {
      targetMouse = [0.5, 0.5];
    }

    if (enableMouseInteraction) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      containerEl.addEventListener("mousemove", handleMouseMove);
      containerEl.addEventListener("mouseleave", handleContainerMouseLeave);
    }

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(containerEl);

    function update(t: number) {
      animationFrameId.current = requestAnimationFrame(update);
      if (!isVisible || document.hidden) return;

      const { color, colorSecondary, amplitude, distance, enableMouseInteraction } =
        propsRef.current;

      program.uniforms.uColor.value.set(...color);
      program.uniforms.uColor2.value.set(...colorSecondary);
      program.uniforms.uAmplitude.value = amplitude;
      program.uniforms.uDistance.value = distance;

      if (enableMouseInteraction) {
        const smoothing = 0.05;
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
      } else {
        program.uniforms.uMouse.value[0] = 0.5;
        program.uniforms.uMouse.value[1] = 0.5;
      }
      program.uniforms.iTime.value = t * 0.001;

      renderer.render({ scene: mesh });
    }
    animationFrameId.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("resize", resize);
      if (enableMouseInteraction) {
        document.removeEventListener("mousemove", handleMouseMove);
      } else {
        containerEl.removeEventListener("mousemove", handleMouseMove);
        containerEl.removeEventListener("mouseleave", handleContainerMouseLeave);
      }
      if (containerEl.contains(gl.canvas)) containerEl.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    lineCount,
    lineWidth,
    lineBlur,
    patternOffset,
    enableMouseInteraction,
    interactionTargetRef,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full min-h-full w-full", className)}
      {...rest}
    />
  );
}
