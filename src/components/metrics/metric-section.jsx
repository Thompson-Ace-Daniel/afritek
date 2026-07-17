import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TrendingUp, Wallet, Award, ShieldCheck, Lock } from "lucide-react";
import { GoldSpeedometer } from "./goldspeedometer";
import { Chip } from "./chip";
import { HoverButton } from "../buttons/hover-button";
import phoneGif from "../../assets/images/phone.gif";

const MetricSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 22,
    mass: 0.5,
    restDelta: 0.0001,
  });

  const yImage = useTransform(smoothProgress, [0, 0.2], [100, 0]);
  const opacityImage = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const scaleImage = useTransform(smoothProgress, [0, 0.2], [0.9, 1]);

  const chip1X = useTransform(smoothProgress, [0.1, 0.3], [0, -150]);
  const chip1Y = useTransform(smoothProgress, [0.1, 0.3], [0, -90]);
  const chip2X = useTransform(smoothProgress, [0.12, 0.32], [0, 150]);
  const chip2Y = useTransform(smoothProgress, [0.12, 0.32], [0, -140]);
  const chip3X = useTransform(smoothProgress, [0.14, 0.34], [0, 170]);
  const chip3Y = useTransform(smoothProgress, [0.14, 0.34], [0, 30]);
  const chip4X = useTransform(smoothProgress, [0.16, 0.36], [0, -140]);
  const chip4Y = useTransform(smoothProgress, [0.16, 0.36], [0, 150]);
  const chip5X = useTransform(smoothProgress, [0.18, 0.38], [0, 140]);
  const chip5Y = useTransform(smoothProgress, [0.18, 0.38], [0, 190]);
  const chipsOpacity = useTransform(smoothProgress, [0.1, 0.25], [0, 1]);

  const leftGaugeProgress = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);
  const rightGaugeProgress = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);
  const textY = useTransform(smoothProgress, [0, 0.2], [40, 0]);
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative h-[250vh] bg-[#020202] text-white"
    >
      <div className="sticky top-0 h-[200vh] lg:h-[120vh] w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 gap-12 overflow-y-visible md:overflow-hidden">
        <div className="relative w-full lg:w-1/2 h-[450px] md:h-[550px] flex items-center justify-center">
          <div className="absolute w-[400px] h-[400px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none transform-gpu" />

          <motion.div
            style={{ y: yImage, opacity: opacityImage, scale: scaleImage }}
            className="relative w-[280px] md:w-[320px] h-[400px] md:h-[460px] rounded-2xl border border-[#D4AF37]/20 bg-[#0a0a0a] p-1.5 shadow-[0_0_50px_rgba(212,175,55,0.05)] transform-gpu will-change-transform"
          >
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <img
                src={phoneGif}
                alt="Smartphone Asset Representation"
                className="w-full h-full object-cover opacity-90 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
            </div>
          </motion.div>

          <Chip
            icon={TrendingUp}
            label="Growth"
            x={chip1X}
            y={chip1Y}
            opacity={chipsOpacity}
          />
          <Chip
            icon={Wallet}
            label="Wealth"
            x={chip2X}
            y={chip2Y}
            opacity={chipsOpacity}
          />
          <Chip
            icon={Award}
            label="Prestige"
            x={chip3X}
            y={chip3Y}
            opacity={chipsOpacity}
          />
          <Chip
            icon={ShieldCheck}
            label="Safety"
            x={chip4X}
            y={chip4Y}
            opacity={chipsOpacity}
          />
          <Chip
            icon={Lock}
            label="Security"
            x={chip5X}
            y={chip5Y}
            opacity={chipsOpacity}
          />
        </div>

        {/* Right Content Group */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="w-full lg:w-1/2 flex flex-col justify-center space-y-10 z-10 transform-gpu will-change-transform"
        >
          <div className="space-y-3 mt-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] via-[#FFF4D8] to-[#AA7C11] leading-[1.1]">
              Africa's First Blockchain Smartphone
            </h2>
          </div>

          <div className="space-y-5 text-sm text-center lg:text-left md:text-base text-neutral-400 leading-relaxed lg:max-w-xl font-light overflow-hidden">
            <p>
              The Global Smartphone Market size is expected to be worth around{" "}
              <span className="text-white font-medium">USD 876.00 Billion</span>{" "}
              by 2032. Growing at a CAGR of 5.70% during the forecast period.
            </p>
            <p>
              Afritek is giving you an exclusive opportunity to secure shares in
              this booming ecosystem for as little as{" "}
              <span className="text-[#D4AF37] font-medium">
                $100 (₦100,000)
              </span>{" "}
              per unit. This is an unparalleled entry point to localized digital
              equity.
            </p>
          </div>

          <div className="flex flex-wrap items-center lg:justify-normal justify-center gap-8 py-2">
            <GoldSpeedometer
              progress={leftGaugeProgress}
              targetValue={6}
              decimals={0}
              suffix="%"
              titleLabel="Available"
              detailsLabel="Active Allocation"
            />
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent hidden sm:block" />
            <GoldSpeedometer
              progress={rightGaugeProgress}
              targetValue={3.9842}
              decimals={4}
              suffix="%"
              titleLabel="Shares Sold"
              detailsLabel="Tranche D Complete"
            />
          </div>

          <HoverButton text="Buy Shares Now" />
        </motion.div>
      </div>
    </div>
  );
};

export default MetricSection;
