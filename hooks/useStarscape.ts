import { useSprings } from "@react-spring/web";
import { useEffect, useRef } from "react";
import { useAnimationFrame } from "./useAnimationFrame"

interface Star {
  x: number;
  y: number;
  scale: number;
  alpha: number;
}

export const useStarscape = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const stars = useRef<Array<Star>>(generateStars(0.7));

  useEffect(() => {
    if (!canvasRef.current) return;
    sizeCanvas(canvasRef.current);
    contextRef.current = canvasRef.current.getContext("2d");
  }, []);

  const springs = useSprings(stars.current.length, 
    stars.current.map((_) => ({
      config: {
        tension: 170,
        friction: 40 
      },
      loop: true,
      from: {
      alpha: (Math.random() + 1) / 2
    }, 
      to: {
        alpha: (Math.random() + 0.5) / 2
      }
    }))
  )

  useAnimationFrame((time) =>  {
    canvasRef.current && contextRef.current && clear(canvasRef.current, contextRef.current);
    springs.forEach((spring, idx) => {
      if(Math.round(Math.random() * 10) % 10 === 0) {
      spring.alpha.advance(time)
      }
      contextRef.current && canvasRef.current && drawStar(contextRef.current, canvasRef.current, {...stars.current[idx], alpha: spring.alpha.get()})
    })
  })


  return canvasRef;
};

const sizeCanvas = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const generateStars = (density: number): Array<Star> => {
  const VMIN = Math.min(window.innerHeight, window.innerWidth);
  const STAR_COUNT = Math.floor(VMIN * density);

  const stars = new Array(STAR_COUNT).fill("").map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    scale: Math.random() * 2,
    alpha: (Math.random() + 0.1) / 1.1,
  }));

  return stars;
};

const clear = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    context.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  )
}

const drawStar = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  star: Star
) => {
    context.fillStyle = `hsla(0, 100%, 100%, ${star.alpha})`;
    context.beginPath();
    context.arc(star.x, star.y, star.scale, 0, Math.PI * 2);
    context.fill();
};
