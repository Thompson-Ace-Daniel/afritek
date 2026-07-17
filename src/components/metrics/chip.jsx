import { motion } from "framer-motion";

export const Chip = ({ icon: Icon, label, x, y, opacity }) => (
  <motion.div
    style={{ x, y, opacity }}
    className="absolute z-20 flex items-center gap-2 px-4 py-2.5 bg-black/95 border border-[#D4AF37]/30 rounded-full shadow-[0_8px_32px_rgba(212,175,55,0.12)] text-[#FFF4D8] backdrop-blur-md transform-gpu will-change-transform"
  >
    <Icon size={16} className="text-[#D4AF37] stroke-[2.5]" />
    <span className="text-[10px] font-extrabold uppercase tracking-widest">
      {label}
    </span>
  </motion.div>
);
