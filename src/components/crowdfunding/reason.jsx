import { motion } from "framer-motion";
import { Target, Megaphone, HandCoins, Users } from "lucide-react";

const reasons = [
  {
    title: "Large amount",
    desc: "At the idea stage, large funds and investors are often unable to provide the necessary agile financing.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Popularization",
    desc: "Crowdfunding serves as a powerful tool for community-building and popularizing our vision.",
    icon: <Megaphone className="w-6 h-6" />,
  },
  {
    title: "Low investment threshold",
    desc: "We open cooperation to unlimited individuals, increasing the flow of investments into the project.",
    icon: <HandCoins className="w-6 h-6" />,
  },
  {
    title: "People's interest",
    desc: "Our community wants to influence their own future and are willing to take ownership in the process.",
    icon: <Users className="w-6 h-6" />,
  },
];

const CrowdfundingSection = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Did We Choose Crowdfunding?
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Afritek is a people-powered innovation, making crowdfunding the key
            to bringing our vision to life and keeping it open to all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrowdfundingSection;
