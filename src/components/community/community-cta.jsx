import { motion } from "framer-motion";
import phoneGif from "../../assets/images/phone.gif";

const CommunitySection = () => {
  return (
    <section className="relative bg-[#020202] py-24 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the <span className="text-[#D4AF37]">Community</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Be part of the Afritek movement! Connect with innovators, get
              exclusive updates, and explore the future of blockchain-powered
              smartphones. Engage in discussions, receive support, and stay
              ahead of new developments.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] cursor-pointer text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#BC9B2F] transition-colors"
          >
            Join Community
          </motion.button>
        </div>

        {/* Right: Animated African Map */}
        <div className="relative flex items-center justify-center h-137.5">
          <img src={phoneGif} alt="Africa" />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
