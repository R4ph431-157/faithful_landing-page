import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTypewriter } from "@/hooks/useTypewriter";

const typewriterSegments = [
  "ghostwriting for builders and creators who want to stay ",
  "consistent",
  " and ",
  "visible",
  " online.",
];

export default function Hero() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const { segmentStates, showCursor } = useTypewriter({
    segments: typewriterSegments,
    segmentDelay: 200,
    charDelay: 55,
    startDelay: 600,
    trigger: true,
  });

  const isAccent = (i: number) => i === 1 || i === 3;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-bg overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 xl:px-24 pt-28 pb-20 md:pb-28">
        <div className="max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-semibold text-text leading-[1.08] tracking-tight">
            {segmentStates.map((seg, i) => {
              if (!seg.visible) return null;
              return (
                <span
                  key={i}
                  className={isAccent(i) ? "text-text-secondary" : undefined}
                >
                  {seg.text}
                  {i === segmentStates.length - 1 && showCursor && (
                    <span className="typewriter-cursor inline-block w-[3px] h-[0.95em] bg-accent ml-1 align-middle" />
                  )}
                </span>
              );
            })}
          </h1>

          <p className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400 mt-8 md:mt-10 text-xl md:text-2xl lg:text-[1.85rem] text-text max-w-xl leading-[1.5] font-serif italic tracking-wide border-l-2 border-accent pl-6 md:pl-8">
            i ghostwrite your twitter and linkedin content every month so you
            stay consistent without thinking about what to post.
          </p>

          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500 mt-8 md:mt-10 flex flex-col gap-3 text-base md:text-[1.05rem] lg:text-lg text-text-secondary">
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-surface-light border border-border flex items-center justify-center">
                <i className="ri-stack-line text-accent" />
              </span>
              <span>monthly content systems</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-surface-light border border-border flex items-center justify-center">
                <i className="ri-inbox-archive-line text-accent" />
              </span>
              <span>delivered in batches</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-surface-light border border-border flex items-center justify-center">
                <i className="ri-shield-check-line text-accent" />
              </span>
              <span>built for consistency, not chaos</span>
            </div>
          </div>

          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-700 mt-10 md:mt-12 flex items-center gap-4">
            <a
              href="https://typeform.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-text text-bg px-9 py-3.5 rounded-full text-[0.95rem] lg:text-base font-medium hover:bg-accent hover:text-bg transition-all duration-300 cursor-pointer whitespace-nowrap tracking-wide flex items-center gap-2"
            >
              <i className="ri-calendar-event-line" />
              apply / book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}