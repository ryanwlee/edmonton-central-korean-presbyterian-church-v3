import { useRef, useState, useEffect } from "react";

const useCollapse = (collapsed: boolean): { ref: React.RefObject<HTMLDivElement>; height: string } => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (!collapsed) {
      setHeight(`${ref.current?.scrollHeight || 0}px`);
    } else {
      setHeight("0px");
    }
  }, [collapsed]);

  return { ref, height };
};

export default useCollapse;
