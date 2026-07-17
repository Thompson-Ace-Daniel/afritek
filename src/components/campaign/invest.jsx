import { motion } from "framer-motion";

import image from "../../assets/images/phone.gif";

const EquitySection = () => {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h3 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.3em]">
            Invest In The Future
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Afritek Equity <br />
            Crowd Funding Campaign
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-lg">
            Be part of a revolution! The Afritek Blockchain Smartphone is
            redefining the mobile industry with cutting-edge blockchain
            security, AI-driven features, and a vision for digital
            transformation across Africa.
          </p>
          <p className="text-white/40 text-sm">
            Our crowdfunding model allows anyone to invest with a small amount
            and gain a stake in Africa's leading smartphone innovation.
          </p>

          <button className="bg-[#D4AF37] cursor-pointer text-black px-8 py-3 rounded-full font-bold uppercase tracking-[0.16em] text-sm hover:bg-[#BC9B2F] transition-all transform hover:-translate-y-1">
            Invest Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[120px] rounded-full scale-75" />

          <img
            src={image}
            alt="Afritek Smartphone"
            className="relative w-full max-w-sm drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EquitySection;
