import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CARD_BG = "#091027";

const baseFeatures = [
  "15 Twitter posts",
  "1 thread",
  "Monthly content themes",
  "2 revision rounds",
];

const premiumFeatures = [
  "20 Twitter posts",
  "2 threads",
  "6 LinkedIn posts (repurposed)",
  "2 revision rounds",
  "Scheduling after approval (Twitter only, optional)",
];

export default function Pricing() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-white"
    >
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out newspirit text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Pricing
          </h2>
        </div>

        {/* Cards — 2 columns from md so they're proportionate on tablets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-3xl md:max-w-4xl mx-auto">

          {/* Base */}
          <div
            className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 rounded-2xl p-6 lg:p-8 xl:p-10 flex flex-col items-center text-center"
            style={{ backgroundColor: CARD_BG }}
          >
            <span
              className="inline-block text-[0.6rem] uppercase tracking-[0.25em] font-bold px-5 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#FFFFFF" }}
            >
              BASE
            </span>

            <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1" style={{ color: "#FFFFFF" }}>
              $1,500
              <span className="text-sm lg:text-base font-normal" style={{ color: "rgba(255,255,255,0.45)" }}>/month</span>
            </p>

            <ul className="mt-7 mb-8 space-y-3 w-full">
              {baseFeatures.map((f, i) => (
                <li key={i} className="text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://tally.so/r/68rbvA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer flex items-center justify-center"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#0D1B3E",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#FFFFFF";
                (e.currentTarget as HTMLElement).style.color = "#0D1B3E";
              }}
            >
              Get Started
            </a>
          </div>

          {/* Premium */}
          <div
            className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 relative rounded-2xl p-6 lg:p-8 xl:p-10 flex flex-col items-center text-center"
            style={{ backgroundColor: CARD_BG }}
          >
            {/* Accent top bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-24 bg-accent rounded-b-full" />

            <span
              className="inline-block text-[0.6rem] uppercase tracking-[0.25em] font-bold px-5 py-1.5 rounded-full mb-6 mt-2"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#FFFFFF" }}
            >
              PREMIUM
            </span>

            <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1" style={{ color: "#FFFFFF" }}>
              $3,000
              <span className="text-sm lg:text-base font-normal" style={{ color: "rgba(255,255,255,0.45)" }}>/month</span>
            </p>

            <ul className="mt-7 mb-8 space-y-3 w-full">
              {premiumFeatures.map((f, i) => (
                <li key={i} className="text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://tally.so/r/68rbvA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer flex items-center justify-center"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#0D1B3E",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#FFFFFF";
                (e.currentTarget as HTMLElement).style.color = "#0D1B3E";
              }}
            >
              Get Started
            </a>
          </div>
        </div>

        <p className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 mt-10 text-center text-sm text-gray-400 italic">
          Note: Engagement (replies, DMs, community management) is not included.
        </p>
      </div>
    </section>
  );
}
