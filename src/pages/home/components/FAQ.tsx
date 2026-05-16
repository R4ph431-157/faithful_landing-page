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
    question: "How do revisions work?",
    answer:
      "You get up to 2 revision rounds per monthly delivery. Revisions are included to ensure the content aligns with your voice. Feedback should be shared within 48–72 hours after delivery. Additional revisions outside scope may be charged or moved to the next cycle.",
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
  isOpen,
  onToggle,
  isLast,
}: {
  item: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div>
      <div className="border-t border-gray-200" />
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-5 md:py-6 text-left cursor-pointer group"
      >
        <span
          className={`newspirit makebold text-sm md:text-base lg:text-[1rem] tracking-[0.06em] leading-snug transition-colors duration-300 ${
            isOpen ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
          }`}
        >
          {item.question}
        </span>
        <span className="flex-shrink-0 mt-0.5 text-gray-400">
          <i
            className={`ri-arrow-up-s-line text-xl transition-transform duration-300 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="IBM Plex Mono text-xs md:text-sm lg:text-[0.88rem] text-gray-500 leading-[2] pb-5 md:pb-6 max-w-2xl">
          {item.answer}
        </p>
      </div>

      {isLast && <div className="border-t border-gray-200" />}
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
      className="relative py-20 md:py-28 lg:py-32 bg-white"
    >
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
        <div className="max-w-3xl mx-auto">
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out mb-12 md:mb-16 text-center">
            <h2 className="newspirit text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              FAQs
            </h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <AccordionItem
                  item={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  isLast={i === faqs.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
