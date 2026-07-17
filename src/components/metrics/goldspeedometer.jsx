import {
  motion,
  useTransform,
} from "framer-motion";
import { AnimatedNumber } from "./animated-number";

export const GoldSpeedometer = ({
  progress,
  targetValue,
  decimals,
  suffix,
  titleLabel,
  detailsLabel,
}) => {
  const size = 180;
  const strokeWidth = 10;
  const radius = (size - strokeWidth * 2.5) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = useTransform(progress, [0, 1], [circumference, 0]);

  return (
    <div
      className="relative flex flex-col items-center justify-center text-[#D4AF37] transform-gpu"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 -rotate-90 transform-gpu will-change-transform"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D8" />
            <stop offset="30%" stopColor="#F5D27B" />
            <stop offset="70%" stopColor="#B38D40" />
            <stop offset="100%" stopColor="#F5D27B" />
          </linearGradient>
          <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="6"
              floodColor="#F5D27B"
              floodOpacity="0.4"
            />
          </filter>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#332712"
          strokeWidth={strokeWidth}
          strokeDasharray="2, 6"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          filter="url(#goldGlow)"
          style={{ strokeDasharray: circumference, strokeDashoffset }}
        />
      </svg>
      <div className="z-10 text-center px-4 flex flex-col items-center">
        <span className="text-3xl font-bold font-mono tracking-tight tabular-nums">
          <AnimatedNumber
            progress={progress}
            target={targetValue}
            decimals={decimals}
            suffix={suffix}
          />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F5D27B] mt-1">
          {titleLabel}
        </span>
        <span className="text-[8px] text-neutral-500 uppercase tracking-wider mt-0.5">
          {detailsLabel}
        </span>
      </div>
    </div>
  );
};
