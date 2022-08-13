import { useState, useRef, useEffect } from "react";

const _array: [] = [];
export function useHover(deps: React.DependencyList | undefined = _array): any {
  const [value, setValue] = useState(false);
  const ref = useRef<Node>(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, deps);
  return [ref, value];
}
