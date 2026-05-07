import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Why wouldn't I just hire a full-time writer?",
    answer:
      "A full-time writer can cost over $100,000/year plus overhead. This gives you a focused monthly system without long-term hiring commitments.",
  },
  {
    question: "How do I request content?",
    answer:
      "You fill the onboarding form once, and I handle everything from there. Each month is delivered in a structured batch.",
  },
  {
    question: "What if I don't like the content?",
    answer:
      "You get up to 2 revision rounds per monthly delivery until it aligns with your voice.",
  },
  {
    question: "What platforms do you write for?",
    answer: "Twitter and LinkedIn depending on your plan.",
  },
  {
    question: "How fast do I receive my content?",
    answer:
      "All monthly content is delivered within 5 business days after onboarding.",
  },
  {
    question: "Do I need to provide ideas?",
    answer:
      "No. I create monthly content themes based on your goals, voice, and audience.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "No refunds due to the custom nature of the work. Time and slots are reserved once payment is made.",
  },
  {
    question: "Can I pause or stop anytime?",
    answer:
      "Service is active only within the paid monthly cycle. You can choose not to renew after each cycle ends.",
  },
] as const;

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`group relative rounded-xl border transition-all duration-500 overflow-hidden ${
        isOpen
          ? "border-accent/30 bg-surface"
          : "border-border bg-surface/50 hover:border-border-light hover:bg-surface"
      }`}
    >
      {/* Active left accent line */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[2px] bg-accent transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-30"
        }`}
      />

      <button
        onClick={onToggle}
        className="w-full flex items-start gap-5 md:gap-6 px-5 md:px-7 py-5 md:py-6 text-left cursor-pointer"
      >
        {/* Number */}
        <span
          className={`flex-shrink-0 font-mono text-xs md:text-sm transition-colors duration-300 ${
            isOpen ? "text-accent" : "text-text-muted group-hover:text-text-secondary"
          }`}
        >
          {num}
        </span>

        {/* Question + arrow */}
        <span className="flex-1 flex items-start justify-between gap-4">
          <span
            className={`font-mono text-xs md:text-sm lg:text-base uppercase tracking-[0.12em] leading-relaxed transition-colors duration-300 ${
              isOpen ? "text-text" : "text-text-secondary group-hover:text-text"
            }`}
          >
            {item.question}
          </span>

          <span
            className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-500 mt-0.5 ${
              isOpen
                ? "bg-accent/10 border-accent/40 rotate-45"
                : "bg-surface-light border-border group-hover:border-border-light"
            }`}
          >
            <i
              className={`ri-add-line text-sm transition-colors duration-300 ${
                isOpen ? "text-accent" : "text-text-muted"
              }`}
            />
          </span>
        </span>
      </button>

      {/* Answer panel */}
      <div
        className={`transition-all duration-500 ease-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 md:px-7 pb-5 md:pb-6 pl-12 md:pl-16">
          <div className="border-t border-border/40 pt-4 md:pt-5">
            <p className="font-serif italic text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed max-w-2xl">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-bg"
    >
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out mb-12 md:mb-16">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Frequently Asked Questions
            </p>
            <div className="w-12 h-px bg-accent/40" />
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <AccordionItem
                  item={faq}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
