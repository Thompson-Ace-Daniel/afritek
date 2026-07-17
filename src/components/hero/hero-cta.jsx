function HeroCTA() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center justify-center items-center h-screen text-white flex flex-col gap-8 font-inter w-screen px-4 backdrop-brightness-35">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mt-17">
        Africa's First{" "}
        <span className="text-amber-400">Blockchain Smartphone</span> Company
      </h1>

      <h2 className="text-md md:text-lg font-normal text-neutral-100 max-w-2xl mx-auto">
        Building the Future of Secure Mobile Technology for Africa and the World
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-4">
        <button className="w-full cursor-pointer sm:w-auto px-6 py-3 bg-amber-400 text-neutral-900 font-bold rounded-lg transition-all duration-300 ease-out hover:bg-amber-500 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:translate-y-0">
          Become A Shareholder
        </button>

        <button className="group relative isolate overflow-hidden w-full cursor-pointer sm:w-auto px-6 py-3 bg-transparent border-2 border-white font-semibold rounded-lg transition-all duration-300 ease-out hover:text-neutral-900 hover:border-transparent hover:-translate-y-0.5 active:translate-y-0 before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100 before:-z-10">
          Explore Our Smartphones
        </button>
      </div>
    </div>
  );
}

export default HeroCTA;
