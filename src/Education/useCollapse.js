import { useRef, useState, useEffect } from "react";

const useCollapse = (collapsed) => {
  const ref = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (!collapsed) {
      setHeight(`${ref.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [collapsed]);

  return { ref, height };
};

export default useCollapse;
