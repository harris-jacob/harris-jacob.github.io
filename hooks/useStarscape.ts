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
  const stars = useRef<Array<Star>>(generateStars(0.1));

  useEffect(() => {
    if (!canvasRef.current) return;
    sizeCanvas(canvasRef.current);
    contextRef.current = canvasRef.current.getContext("2d");
  }, []);

  const springs = useSprings(stars.current.length, 
    stars.current.map((_, idx) => ({
      delay: idx * 1,
      config: {
        tension: 250,
        friction: 40,
      },
      loop: true,
      from: {
      alpha: 0.5,
    }, 
      to: {
        alpha: 0.6,
      }
    }))
  )

  useAnimationFrame(() =>  {
    canvasRef.current && contextRef.current && clear(canvasRef.current, contextRef.current);
    springs.forEach((spring, idx) => {
      contextRef.current && drawStar(contextRef.current, {...stars.current[idx], alpha: spring.alpha.get()})
      return
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
    scale: Math.random() * 4,
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
  star: Star
) => {
    context.fillStyle = `hsla(0, 100%, 100%, ${star.alpha})`;
    console.log(context.fillStyle)
    context.beginPath();
    context.arc(star.x, star.y, star.scale, 0, Math.PI * 2);
    context.fill();
};
