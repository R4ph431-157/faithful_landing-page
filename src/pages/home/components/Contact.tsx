import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-white overflow-hidden"
    >
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 xl:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out newspirit text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Ready to stay consistent?
          </h2>

          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 mt-10 md:mt-12">
            <a
              href="https://tally.so/r/68rbvA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-navy text-text px-10 py-4 rounded-full text-base font-semibold hover:bg-transparent hover:text-navy hover:ring-2 hover:ring-navy hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap tracking-wide"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
