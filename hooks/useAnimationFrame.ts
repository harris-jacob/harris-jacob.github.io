import { useCallback, useEffect, useRef } from "react";



export const useAnimationFrame = (callback: (delta: number) => void) => {
  const requestRef = useRef(0);
  const previousTimeRef = useRef(0);
  const callbackRef = useRef(callback);
  
  const animate = useCallback((time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      callbackRef.current(deltaTime)
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [])
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]); 
}
