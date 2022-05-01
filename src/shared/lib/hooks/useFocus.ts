import { useState, useRef, useEffect } from "react";

export function useFocus(): any {
  const [value, setValue] = useState(false);
  const ref = useRef<Node>(null);
  const handleIn = () => setValue(true);
  const handleOut = () => setValue(false);
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("focus", handleIn);
      node.addEventListener("blur", handleOut);
      return () => {
        node.removeEventListener("focus", handleIn);
        node.removeEventListener("blur", handleOut);
      };
    }
  }, []);
  return [ref, value];
}
