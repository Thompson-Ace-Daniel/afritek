import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Layers,
  Cpu,
  Compass,
  Info,
  Mail,
} from "lucide-react";
import Logo from "./logo";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Investment", href: "#", icon: Layers },
    { name: "Technology", href: "#", icon: Cpu },
    { name: "Product", href: "#", icon: Compass },
    { name: "About Us", href: "#", icon: Info },
    { name: "Contact", href: "#", icon: Mail },
  ];

  return (
    <>
      {/* GLOBAL HEADER CONTAINER */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-2 transition-all duration-500 ease-in-out pointer-events-none">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center relative">
          <div
            className={`absolute inset-0 w-full flex items-center justify-between transition-all duration-500 ease-in-out ${
              isScrolled
                ? "opacity-0 scale-95 pointer-events-none translate-y-2.5"
                : "opacity-100 scale-100 pointer-events-auto translate-y-0"
            }`}
          >
            <div className="flex items-center gap-12 justify-start">
              {/* Logo & Mobile Toggle */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden text-white hover:text-white/80 transition-all p-2 rounded-lg bg-white/5 border border-white/10 active:scale-95"
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
                <Logo />
              </div>

              {/* Main Navigation */}
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-white/80">
                {navLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-6 text-sm font-medium">
              <nav className="hidden md:flex items-center gap-6 text-white/80">
                {navLinks.slice(3).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <button className="flex items-center justify-center text-black bg-white hover:bg-neutral-100 active:scale-95 transition-all px-5 py-2.5 rounded-full font-semibold shadow-md cursor-pointer">
                Login
              </button>
            </div>
          </div>

          {/* 2. FLOATING DOCK  */}
          <div className="w-full flex justify-center">
            <div
              className={`pointer-events-auto flex items-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-full px-2 py-1.5 gap-1.5 transition-all duration-500 ease-out ${
                isScrolled
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-5 scale-90 pointer-events-none"
              }`}
            >
              {/* Floating Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center text-white hover:text-black w-9 h-9 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>

              <div className="hidden md:flex items-center gap-1.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-1.5 text-white hover:text-neutral-950 font-medium text-md px-3 py-2 rounded-full hover:bg-neutral-100/80 transition-all duration-200"
                      title={link.name}
                    >
                      <Icon size={14} className="opacity-70" />
                      {link.name}
                    </a>
                  );
                })}
              </div>

              <div className="w-px h-5 bg-neutral-300/60 dark:bg-neutral-700/60 mx-1 hidden md:block" />

              <a
                href="#Buy shares"
                className="bg-black text-white hover:bg-neutral-800 text-md font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5 active:scale-95"
              >
                Buy shares
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 right-0 bg-neutral-950 text-white z-45 transition-all duration-500 ease-in-out border-b border-white/10 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 shadow-2xl pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "5.5rem" }}
      >
        <div className="px-6 pb-8 pt-4 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-4 text-lg font-medium tracking-wide">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors py-3 border-b border-white/5 active:pl-2"
                >
                  <Icon size={18} className="text-neutral-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          <button className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-neutral-100 transition-colors mt-2 cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
