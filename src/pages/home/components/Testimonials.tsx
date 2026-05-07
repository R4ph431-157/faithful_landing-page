import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const screenshots = [
  {
    src: "https://i.ibb.co/DHw7X1Gd/Client-before.jpg",
    alt: "client feedback screenshot one",
    label: "Revision feedback",
  },
  {
    src: "https://i.ibb.co/BHv0zQN4/k47ttd.jpg",
    alt: "client feedback screenshot two",
    label: "delivery feedback",
  },
  {
    src: "https://i.ibb.co/PzvJhmZy/Tst.jpg",
    alt: "client feedback screenshot three",
    label: "client testimonial",
  },
] as const;

export default function Testimonials() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-surface overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Section heading */}
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out mb-12 md:mb-16">
            <p className="font-mono text-xs lg:text-sm uppercase tracking-[0.3em] text-accent mb-4">
              client feedback
            </p>
            <div className="w-12 h-px bg-accent/40" />
          </div>

          {/* Screenshots grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {screenshots.map((shot, i) => (
              <div
                key={i}
                className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="bg-bg border border-border rounded-2xl p-3 md:p-4 hover:border-accent/30 transition-all duration-300">
                  <div className="rounded-xl overflow-hidden border border-border">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="w-full h-auto object-top"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="font-mono text-xs lg:text-sm text-text-muted tracking-wider">
                      {shot.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
