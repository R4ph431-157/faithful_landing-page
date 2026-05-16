import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HERO_BG = "#091027";

export default function Hero() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: HERO_BG }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[560px] md:w-[800px] h-[420px] sm:h-[540px] md:h-[680px] rounded-full bg-accent/8 blur-[120px] md:blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-20 md:pt-36 md:pb-40 text-center">

        <h1
          className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out newspirit text-[2rem] sm:text-[2.6rem] md:text-5xl lg:text-[3.75rem] xl:text-[4.5rem] font-semibold leading-[1.15] tracking-tight"
          style={{ color: "#FFFFFF" }}
        >
          Ghostwriting for builders and creators who want to stay consistent online
        </h1>

        <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 mt-7 md:mt-10 inline-block">
          <p
            className="text-sm sm:text-base md:text-lg tracking-wide"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Done-for-you Twitter &amp; LinkedIn content, delivered in batches
          </p>

          <span className="tagline-underline" />
        </div>

        <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500 mt-10 md:mt-14 flex justify-center">
          <a
            href="https://tally.so/r/68rbvA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-[0.95rem] font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap tracking-wide hover:-rotate-3"
            style={{
              backgroundColor: HERO_BG,
              color: "#FFFFFF",
              border: "1.5px solid rgba(255,255,255,0.55)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.12), 0 0 18px rgba(255,255,255,0.35), 0 0 50px rgba(255,255,255,0.15)",
            }}
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Wavy Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          className="relative block w-full h-[90px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,160L0,160Z"
            fill="#F5F5F5"
          />
        </svg>
      </div>
    </section>
  );
}