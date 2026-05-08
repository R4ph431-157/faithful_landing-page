import { useState, useEffect } from "react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 py-3.5 flex items-center justify-between">
        <button
          onClick={() => handleNav("hero")}
          className="font-serif text-xl md:text-2xl font-semibold text-text tracking-tight cursor-pointer newspirit"
        >
          Founders Pen
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNav("about")}
            className="text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer whitespace-nowrap tracking-wide"
          >
            About
          </button>
          <button
            onClick={() => handleNav("pricing")}
            className="text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer whitespace-nowrap tracking-wide"
          >
            Pricing
          </button>
          <button
            onClick={() => handleNav("faq")}
            className="text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer whitespace-nowrap tracking-wide"
          >
            FAQ
          </button>
          <button
            onClick={() => handleNav("contact")}
            className="text-sm font-medium bg-text text-bg px-6 py-2.5 rounded-full hover:bg-accent hover:text-bg transition-all duration-300 cursor-pointer whitespace-nowrap tracking-wide"
          >
            Book A Call
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-text cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={`${mobileOpen ? "ri-close-line" : "ri-menu-4-line"} text-2xl`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-6 space-y-4">
          <button onClick={() => handleNav("about")} className="block text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">About</button>
          <button onClick={() => handleNav("pricing")} className="block text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">Pricing</button>
          <button onClick={() => handleNav("faq")} className="block text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">FAQ</button>
          <button onClick={() => handleNav("contact")} className="block text-sm font-medium bg-text text-bg px-6 py-2.5 rounded-full cursor-pointer text-center">Book A Call</button>
        </div>
      )}
    </nav>
  );
}
