import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    type: "intro",
    title: "What Are Your Benefits?",
    desc: "Explore how Afritek creates value through innovation, security, and shared growth.",
  },
  {
    type: "benefit",
    title: "Opportunity to make Profits",
    desc: "Earn financial rewards through our business model, whether through direct sales or revenue sharing.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    type: "benefit",
    title: "Industry Access",
    desc: "Gain access to a fast-growing market and benefit from its expansion, demand, and innovation.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
  },
  {
    type: "benefit",
    title: "Capital Appreciation",
    desc: "Your investment has the potential to grow in value over time, increasing your long-term returns.",
    img: "https://picsum.photos/seed/capital/1000/1000",
  },
  {
    type: "benefit",
    title: "Referral Rewards",
    desc: "Earn generous commissions by referring others, creating an additional income stream.",
    img: "https://picsum.photos/seed/referral/1000/1000",
  },
];

const SlideItem = ({ slide, i, scrollYProgress, total }) => {
  const start = i / total;
  const end = (i + 1) / total;
  const buffer = (end - start) / 4;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + buffer, end - buffer, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [start, start + buffer, end - buffer, end],
    [20, 0, 0, -20],
  );

  return (
    <motion.div
      style={{ opacity, y, position: "absolute", inset: 0 }}
      className="flex items-center justify-center h-screen px-6"
    >
      {slide.type === "intro" ? (
        <div className="text-center max-w-4xl">
          <h2 className="text-5xl font-black text-black leading-tight tracking-tight">
            {slide.title}
          </h2>
          <p className="mt-8 text-gray-500 text-xl md:text-2xl font-light">
            {slide.desc}
          </p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-8 md:gap-16">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              {slide.title}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
              {slide.desc}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-62.5 md:h-125 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const BenefitsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {slides.map((slide, i) => (
            <SlideItem
              key={i}
              slide={slide}
              i={i}
              total={slides.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
