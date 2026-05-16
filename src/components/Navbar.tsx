import { useState, useEffect } from "react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

interface NavbarProps {
  subPage?: boolean;
}

export default function Navbar({ subPage = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(subPage);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (subPage) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [subPage]);

  const handleNav = (id: string) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 backdrop-blur-xl" : "border-b border-transparent"
      }`}
      style={scrolled ? { backgroundColor: "#091027" } : { backgroundColor: "transparent" }}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 py-4 flex items-center justify-between">
        {subPage ? (
          <a
            href="/"
            className="font-serif text-xl md:text-2xl font-semibold tracking-tight cursor-pointer newspirit"
            style={{ color: "#FFFFFF" }}
          >
            Founders Pen
          </a>
        ) : (
          <button
            onClick={() => handleNav("hero")}
            className="font-serif text-xl md:text-2xl font-semibold tracking-tight cursor-pointer newspirit"
            style={{ color: "#FFFFFF" }}
          >
            Founders Pen
          </button>
        )}

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map(({ id, label }) =>
            subPage ? (
              <a
                key={id}
                href={`/#${id}`}
                className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap tracking-wide"
                style={{ color: "rgba(255,255,255,0.72)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
              >
                {label}
              </a>
            ) : (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap tracking-wide capitalize"
                style={{ color: "rgba(255,255,255,0.72)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
          style={{ color: "#FFFFFF" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={`${mobileOpen ? "ri-close-line" : "ri-menu-4-line"} text-2xl`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-6 space-y-4" style={{ backgroundColor: "#091027" }}>
          {navItems.map(({ id, label }) =>
            subPage ? (
              <a
                key={id}
                href={`/#${id}`}
                className="block text-sm font-medium transition-colors cursor-pointer"
                style={{ color: "rgba(255,255,255,0.72)" }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ) : (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="block text-sm font-medium transition-colors cursor-pointer"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {label}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}
