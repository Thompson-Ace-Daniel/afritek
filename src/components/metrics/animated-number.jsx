import { useState } from "react";

import { useMotionValueEvent } from "framer-motion";

export const AnimatedNumber = ({ progress, target, decimals, suffix }) => {
  const [value, setValue] = useState(0);
  useMotionValueEvent(progress, "change", (latest) => {
    setValue(latest * target);
  });
  return (
    <span>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};
