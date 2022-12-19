import { useEffect, useRef } from "react";

export function useTilt(active: boolean) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    let el = ref.current as any;

    const rotate = (p: number) => p - 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      if (!el) {
        return;
      }
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined,
      } as any;
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect?.left) / state.rect.width;
      const py = (state.mouseY - state.rect?.top) / state.rect.height;
      el.style.transition = "none";
      el.style.transform = `perspective(1000px) rotateY(calc(${rotate(
        px,
      )} * 45deg))
      rotateX(calc(${rotate(py)} * -45deg))`;
    };

    const handleMouseOver = () => {
      el.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseOut = () => {
      el.style.transition = "all 0.5s";
      el.style.transform = "perspective(1000px)";
    };

    el.addEventListener("mouseover", handleMouseOver);
    el.addEventListener("mouseout", handleMouseOut);

    return () => {
      el.removeEventListener("mouseover", handleMouseOver);
    };
  }, [active]);

  return ref;
}
