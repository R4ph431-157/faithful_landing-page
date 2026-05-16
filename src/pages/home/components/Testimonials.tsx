import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const screenshots = [
  {
    src: "https://i.ibb.co/DHw7X1Gd/Client-before.jpg",
    alt: "client feedback screenshot one",
  },
  {
    src: "https://i.ibb.co/BHv0zQN4/k47ttd.jpg",
    alt: "client feedback screenshot two",
  },
  {
    src: "https://i.ibb.co/PzvJhmZy/Tst.jpg",
    alt: "client feedback screenshot three",
  },
] as const;

export default function Testimonials() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
        {/* Section heading */}
        <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out mb-16 md:mb-20 text-center">
          <h2 className="newspirit text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What clients are saying
          </h2>
        </div>

        {/* Mobile: stacked */}
        <div className="grid grid-cols-1 gap-6 md:hidden max-w-xs mx-auto">
          {screenshots.map((shot, i) => (
            <div key={i} className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out" style={{ transitionDelay: `${i * 120}ms` }}>
              <img
                src={shot.src}
                alt={shot.alt}
                className="w-full rounded-3xl shadow-2xl"
                style={{ border: "4px solid #111827" }}
              />
            </div>
          ))}
        </div>

        {/* Desktop: overlapping phone fan */}
        <div className="hidden md:block relative h-[480px] lg:h-[540px] max-w-4xl mx-auto">
          {/* Left phone */}
          <div
            className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 absolute top-10 left-0 lg:left-8 z-10"
            style={{ transform: "rotate(-12deg)" }}
          >
            <img
              src={screenshots[0].src}
              alt={screenshots[0].alt}
              className="w-44 lg:w-52 xl:w-56 rounded-3xl shadow-xl opacity-90"
              style={{ border: "4px solid #111827" }}
            />
          </div>

          {/* Center phone — front and center */}
          <div
            className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 absolute top-0 left-1/2 -translate-x-1/2 z-20"
          >
            <img
              src={screenshots[1].src}
              alt={screenshots[1].alt}
              className="w-52 lg:w-60 xl:w-64 rounded-3xl shadow-2xl"
              style={{ border: "5px solid #111827" }}
            />
          </div>

          {/* Right phone */}
          <div
            className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 absolute top-10 right-0 lg:right-8 z-10"
            style={{ transform: "rotate(12deg)" }}
          >
            <img
              src={screenshots[2].src}
              alt={screenshots[2].alt}
              className="w-44 lg:w-52 xl:w-56 rounded-3xl shadow-xl opacity-90"
              style={{ border: "4px solid #111827" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
