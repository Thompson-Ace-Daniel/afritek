export const HoverButton = ({ text }) => (
  <button className="group relative isolate overflow-hidden w-full lg:w-max px-10 py-4 bg-transparent border border-[#D4AF37]/50 font-bold text-xs tracking-[0.25em] uppercase rounded-lg transition-all duration-500 ease-out hover:border-transparent hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] active:scale-[0.98] cursor-pointer">
    <span className="relative z-10 text-[#D4AF37] group-hover:text-black transition-colors duration-300">
      {text}
    </span>
    <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#FFF4D8] via-[#D4AF37] to-[#AA7C11] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
  </button>
);
