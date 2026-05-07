import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-surface overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 xl:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
            Get Started
          </p>
          <h2 className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 font-serif text-3xl md:text-4xl lg:text-[3.25rem] font-semibold text-text leading-tight">
            I appreciate your interest in Founder's Pen.
          </h2>
          <p className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 mt-5 text-lg md:text-xl lg:text-2xl text-text-secondary">
            Fill out this form, and I'll get back to you as soon as possible.
          </p>

          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 mt-12 md:mt-14 text-center">
            <a
              href="https://typeform.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-text text-bg px-10 py-4 rounded-full text-base font-medium hover:bg-accent hover:text-bg transition-all duration-300 cursor-pointer whitespace-nowrap tracking-wide"
            >
              <i className="ri-calendar-event-line" />
              apply / book a call
            </a>
            <p className="mt-5 text-sm text-text-muted">
              takes less than 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
