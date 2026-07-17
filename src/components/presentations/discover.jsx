import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h3 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Video Presentation
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Discover Afritek in Action
          </h2>
        </div>

        <div className="relative w-full md:w-180 aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
          <div className="absolute inset-0 bg-linear-to-br overflow-hidden from-black to-[#1a1a1a] flex items-center justify-center">
            <span className="text-white/20 font-mono text-sm">
              Video Placeholder
            </span>
          </div>

          <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 transition-colors duration-500 rounded-3xl pointer-events-none" />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <Play className="text-black fill-black ml-1 w-8 h-8" />
          </motion.button>

          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] rounded-br-3xl opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
