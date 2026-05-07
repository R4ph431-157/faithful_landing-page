import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const imageUrl =
    "https://i.ibb.co/N2rFW138/IMG-20260506-WA0009.jpg";

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-surface overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Image */}
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 flex-shrink-0 lg:w-[380px] xl:w-[420px]">
            <div className="relative">
              <div className="absolute -inset-3 bg-surface-light rounded-2xl" />
              <div className="absolute -inset-6 bg-border rounded-2xl opacity-20" />
              <div className="absolute -bottom-3 -left-5 w-8 h-8 rounded-full bg-surface-light border border-border flex items-center justify-center z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                <i className="ri-edit-2-line text-accent text-xs" />
              </div>
              <img
                src={imageUrl}
                alt="Faithful, founder of Founder's Pen"
                className="relative w-full h-[420px] lg:h-[480px] xl:h-[520px] object-cover rounded-xl border border-border"
              />
            </div>
          </div>

          {/* Story Text */}
          <div className="flex-1 lg:pt-8">
            <h2 className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 font-serif text-3xl md:text-4xl lg:text-[3.25rem] font-semibold text-text leading-tight">
              i didn&apos;t plan to become a ghostwriter.
            </h2>

            <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 mt-8 md:mt-10 space-y-6 max-w-lg">
              <p className="text-xs md:text-sm lg:text-base font-sans font-semibold tracking-[0.2em] text-text-muted leading-[2.2]">
                i started out writing for fairblock, a web3 project, where i
                helped turn complex topics into clear, simple content.
              </p>
              <p className="text-xs md:text-sm lg:text-base font-sans font-semibold tracking-[0.2em] text-text-muted leading-[2.2]">
                after that, i worked with a ghostwriting agency, writing across
                different voices and styles.
              </p>
              <p className="text-xs md:text-sm lg:text-base font-sans font-semibold tracking-[0.2em] text-text-muted leading-[2.2]">
                and it became clear that builders and creators don&apos;t
                struggle with ideas, but with <span className="text-accent">consistency</span>.
              </p>
              <p className="font-serif italic text-lg md:text-xl lg:text-[1.55rem] text-text leading-[1.6] border-l border-accent pl-5 md:pl-6">
                so i built founder&apos;s pen to help them stay consistent online
                with simple ghostwritten content systems that make posting feel
                effortless instead of forced.
              </p>
            </div>

            {/* Founder signature */}
            <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500 mt-8 md:mt-10 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-surface-light border border-border flex items-center justify-center">
                <i className="ri-quill-pen-line text-accent text-xs" />
              </span>
              <div>
                <p className="font-serif text-xl md:text-2xl italic text-text">
                  — faithful
                </p>
                <p className="text-sm text-text-muted mt-1">
                  owner, founder&apos;s pen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}