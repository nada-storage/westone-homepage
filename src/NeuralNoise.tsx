import { useEffect, useRef } from 'react';

const NeuralNoise = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Vertex shader: Simple quad covering the screen
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader: Neural noise effect
    // Using a simple domain warping or FBM approach to simulate glowing threads
    const fsSource = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      // GLSL Simplex/Perlin noise helper functions would be long here.
      // We'll use a pseudo-random based FBM approach for compactness and effect.

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        
        // Cubic Hermite Curve
        f = f * f * (3.0 - 2.0 * f);

        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 5; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      // Domain warping for the "fluid/neural" look
      void main() {
        vec2 st = gl_FragCoord.xy / resolution.xy;
        st.x *= resolution.x / resolution.y;
        
        vec2 pos = st * 2.0; // Scale reduced for lower frequency
        
        // Movement
        float t = time * 0.05; // Significantly slowed down
        
        float pattern = 0.0;
        
        // First layer of warping
        vec2 q = vec2(
          fbm(pos + vec2(0.0, 0.0) + t),
          fbm(pos + vec2(5.2, 1.3) + t)
        );
        
        // Second layer
        vec2 r = vec2(
          fbm(pos + 4.0 * q + vec2(1.7, 9.2) + 0.15 * t),
          fbm(pos + 4.0 * q + vec2(8.3, 2.8) + 0.126 * t)
        );
        
        pattern = fbm(pos + 4.0 * r);
        
        // Color mapping
        // Dark background
        vec3 color = vec3(0.0);
        
        // Electric blue / cyan glowing effect
        // Mix based on pattern intensity
        // Increase contrast to make "threads"
        float intensity = 1.0 - smoothstep(0.2, 0.9, pattern);
        intensity = pow(intensity, 4.0); // Sharpen
        
        // Add Purple / Magenta color
        vec3 c1 = vec3(0.4, 0.0, 0.6); // Deep Purple
        vec3 c2 = vec3(0.6, 0.1, 0.8); // Lighter Purple/Magenta
        
        // Reduced max intensity from 2.0 to 1.5 for subtler look
        color = mix(color, c1, r.x * intensity * 1.5);
        color = mix(color, c2, r.y * intensity * 1.5);
        
        // Vignette
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        float vig = 1.0 - length(uv - 0.5) * 1.0;
        color *= clamp(vig, 0.0, 1.0);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile shader helper
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);

    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Set up quad buffer
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), // 2 triangles covering -1 to 1
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'resolution');
    const timeLocation = gl.getUniformLocation(program, 'time');

    let animationFrameId: number;

    const render = (now: number) => {
      // Resize if needed
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, now * 0.001); // Seconds

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      // Optional: Clean up GL resources
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 bg-black"
    />
  );
};

export default NeuralNoise;
