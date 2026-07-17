import { motion } from "framer-motion";

import img1 from "../../assets/images/partners/image1.png";
import img2 from "../../assets/images/partners/image2.png";
import img3 from "../../assets/images/partners/image3.png";
import img4 from "../../assets/images/partners/image4.png";
import img5 from "../../assets/images/partners/image5.png";
import img6 from "../../assets/images/partners/image6.png";
import img7 from "../../assets/images/partners/image7.png";

const partners = [img1, img2, img3, img4, img5, img6, img7];

const PartnerCarousel = () => {
  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold text-white text-center">
          Partnering Companies
        </h2>
      </div>

      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          className="flex gap-16 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...partners, ...partners].map((src, index) => (
            <div
              key={index}
              className="shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
