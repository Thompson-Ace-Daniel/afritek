import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cpu,
  BrainCircuit,
  ShieldCheck,
  Lock,
  Share2,
  HandCoins,
} from "lucide-react";

const features = [
  {
    title: "Blockchain",
    desc: "Secures and manages your private keys, as operated on Secure OS.",
    icon: <Globe />,
  },
  {
    title: "Top Notch Mobile App",
    desc: "Access all of our services using our top notch android and ios apps.",
    icon: <Smartphone />,
  },
  {
    title: "Web3",
    desc: "Pioneering mobile ecosystem for multi-chain environments.",
    icon: <Cpu />,
  },
  {
    title: "Artificial Intelligence",
    desc: "The work is innovative. The experience is magic.",
    icon: <BrainCircuit />,
  },
  {
    title: "Privacy",
    desc: "Privacy is at the heart of what we stand for.",
    icon: <ShieldCheck />,
  },
  {
    title: "Encryption Protocol",
    desc: "End-to-end secure chat, calls, video, and files transfer.",
    icon: <Lock />,
  },
  {
    title: "Referral Earning",
    desc: "Earn instantly when your referral subscribe or buy our product.",
    icon: <Share2 />,
  },
  {
    title: "Pay Your Customer",
    desc: "A happy & satisfied customer is one who will continue to buy from you.",
    icon: <HandCoins />,
  },
];

const FeatureCard = ({ feature }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    className="group relative bg-[#050505] p-8 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/30"
  >
    {/* Subtle Golden Glow on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-[#D4AF37] border border-white/10 group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
    </div>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section className="bg-black py-24 px-6 relative">
      {/* Background radial gradient for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Afritek Technologies
          </h2>
          <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm">
            Empowering the Future of Mobile innovation
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
