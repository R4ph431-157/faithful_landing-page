import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const imageUrl = "https://i.ibb.co/N2rFW138/IMG-20260506-WA0009.jpg";

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">

        {/* How this started — two column */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Image */}
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 flex-shrink-0 lg:w-[300px] xl:w-[340px]">
            <img
              src={imageUrl}
              alt="Faithful, founder of Founder's Pen"
              className="w-full h-[400px] lg:h-[460px] object-cover rounded-2xl"
              style={{ border: "6px solid #0D1B3E" }}
            />
          </div>

          {/* Story text */}
          <div className="flex-1 lg:pt-2">
            <h2 className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 newspirit text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-gray-900 mb-7 md:mb-9">
              How this started
            </h2>

            <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 space-y-5 max-w-lg">
              <p className="IBM Plex Mono text-xs md:text-sm lg:text-[0.88rem] text-gray-600 leading-[2.1]">
                I didn&apos;t plan to become a ghostwriter.
              </p>
              <p className="IBM Plex Mono text-xs md:text-sm lg:text-[0.88rem] text-gray-600 leading-[2.1]">
                I started out writing for Fairblock, a Web3 project, where I
                helped turn complex topics into clear, simple content.
              </p>
              <p className="IBM Plex Mono text-xs md:text-sm lg:text-[0.88rem] text-gray-600 leading-[2.1]">
                After that, I worked with a ghostwriting agency, writing across
                different voices and styles.
              </p>
              <p className="IBM Plex Mono text-xs md:text-sm lg:text-[0.88rem] text-gray-600 leading-[2.1]">
                And it became clear that builders and creators don&apos;t
                struggle with ideas, but with consistency.
              </p>
              <p className="IBM Plex Mono text-xs md:text-sm lg:text-[0.88rem] text-gray-600 leading-[2.1]">
                So I built Founder&apos;s Pen to help them stay consistent
                online with simple ghostwritten content systems that make
                posting feel effortless instead of forced.
              </p>
            </div>

            {/* Signature */}
            <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400 mt-8 md:mt-10">
              <svg
                viewBox="0 0 220 65"
                width="160"
                height="48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 10,50 C 14,28 22,14 28,32 C 33,48 40,40 52,31 C 64,22 70,38 86,31 C 102,24 112,37 130,29 C 148,21 158,32 172,25 C 181,20 188,26 195,22"
                  stroke="#1a1a2e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 8,42 C 10,34 13,46 16,40"
                  stroke="#1a1a2e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* How big is your team */}
        <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500 mt-20 md:mt-28 lg:mt-32 border-t border-gray-200 pt-16 md:pt-20">
          <h2 className="newspirit text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-gray-900 mb-6 md:mb-8">
            How big is your team
          </h2>
          <p className="IBM Plex Mono text-xs md:text-sm lg:text-[0.88rem] text-gray-600 leading-[2.1] max-w-xl">
            Founder&apos;s Pen is a one-person ghostwriting system, so
            you&apos;ll work directly with me, Faithful, founder of
            Founders Pen.
          </p>
        </div>

      </div>
    </section>
  );
}
