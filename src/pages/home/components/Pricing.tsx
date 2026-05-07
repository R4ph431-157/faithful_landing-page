import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const baseFeatures = [
  { text: "15 twitter posts", icon: "ri-twitter-x-line" },
  { text: "1 thread", icon: "ri-chat-thread-line" },
  { text: "monthly content themes", icon: "ri-lightbulb-line" },
  { text: "2 revision rounds", icon: "ri-edit-circle-line" },
  { text: "delivered in a monthly batch (within 5 business days)", icon: "ri-time-line" },
];

const premiumFeatures = [
  { text: "20 twitter posts", icon: "ri-twitter-x-line" },
  { text: "3 threads", icon: "ri-chat-thread-line" },
  { text: "10 linkedin posts (repurposed from twitter ideas)", icon: "ri-linkedin-fill" },
  { text: "monthly content themes", icon: "ri-lightbulb-line" },
  { text: "2 revision rounds", icon: "ri-edit-circle-line" },
  { text: "delivered in a monthly batch (within 5 business days)", icon: "ri-time-line" },
  { text: "scheduling after approval (optional)", icon: "ri-calendar-schedule-line" },
];

export default function Pricing() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-bg"
    >
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
        {/* Section label */}
        <div className="text-center mb-16 md:mb-20">
          <p className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-heading">
            Pricing
          </p>
          <h2 className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 font-serif text-3xl md:text-4xl lg:text-[3.25rem] font-semibold text-text mt-5">
            simple, transparent pricing
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {/* Base Plan */}
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 bg-surface border border-border rounded-2xl p-7 md:p-9 hover:border-border-light hover:-translate-y-1 hover:duration-300">
            <p className="text-xs uppercase tracking-[2px] text-accent font-semibold">
              base
            </p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-serif text-4xl md:text-5xl xl:text-6xl font-semibold text-text">
                $1,500
              </span>
              <span className="text-text-muted text-base lg:text-lg">/month</span>
            </div>
            <p className="mt-3 text-text-secondary text-base lg:text-lg">
              twitter ghostwriting system for consistent presence
            </p>

            <ul className="mt-8 space-y-4">
              {baseFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-text-secondary">
                  <i className={`${feature.icon} text-accent text-xs mt-1.5 flex-shrink-0`} />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://typeform.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-full bg-surface-light border border-border text-text py-3.5 rounded-full text-base font-medium hover:bg-text hover:text-bg hover:border-text transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <i className="ri-rocket-line" />
              get started
            </a>
          </div>

          {/* Premium Plan */}
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 relative bg-surface border border-accent/30 rounded-2xl p-7 md:p-9 hover:border-accent/50 hover:-translate-y-1 hover:duration-300">
            {/* Recommended indicator */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-24 bg-accent rounded-b-full" />

            <p className="text-xs uppercase tracking-[2px] text-accent font-semibold mt-2">
              premium
            </p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-serif text-4xl md:text-5xl xl:text-6xl font-semibold text-text">
                $3,000
              </span>
              <span className="text-text-muted text-base lg:text-lg">/month</span>
            </div>
            <p className="mt-3 text-text-secondary text-base lg:text-lg">
              twitter + linkedin ghostwriting system
            </p>

            <ul className="mt-8 space-y-4">
              {premiumFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-text-secondary">
                  <i className={`${feature.icon} text-accent text-xs mt-1.5 flex-shrink-0`} />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://typeform.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-full bg-accent text-bg py-3.5 rounded-full text-base font-medium hover:bg-text hover:text-bg transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <i className="ri-rocket-line" />
              get started
            </a>
          </div>
        </div>

        {/* Engagement Note */}
        <p className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 mt-10 text-center text-sm text-text-muted italic">
          note: engagement (replies, dms, community management) is not included.
        </p>
      </div>
    </section>
  );
}