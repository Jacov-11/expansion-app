import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGsapAnimation = (startState: gsap.TweenVars, endState: gsap.TweenVars) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current, startState, endState);
    }
  }, []);

  return elementRef;
};
