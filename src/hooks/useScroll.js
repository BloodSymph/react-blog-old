import {useRef} from "react";

export const useScroll = () => {
  const elementRef = useRef(null);
  const setScroll = () => {
      elementRef.current?.scrollIntoView({block: 'start', behavior: 'smooth'});
  };
  return [elementRef, setScroll];
};