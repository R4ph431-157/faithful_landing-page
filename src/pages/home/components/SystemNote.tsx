import { useRef, useEffect, useState } from "react";

const timelineItems = [
  {
    id: "01",
    label: "system note",
    icon: "ri-user-smile-line",
    type: "text" as const,
    content:
      "founder's pen is a one-person ghostwriting system, so you'll work directly with me, faithful, founder of founder's pen.",
  },
  {
    id: "02",
    label: "payment terms",
    icon: "ri-bank-card-line",
    type: "list" as const,
    items: [
      { icon: "ri-currency-line", text: "monthly upfront (usdt only)" },
      { icon: "ri-calendar-2-line", text: "each subscription runs for 30 days from payment date" },
      { icon: "ri-repeat-2-line", text: "example: pay jan 3 → renews feb 3" },
      { icon: "ri-play-circle-line", text: "work begins after payment is received" },
    ],
  },
  {
    id: "03",
    label: "revision policy",
    icon: "ri-edit-box-line",
    type: "list" as const,
    items: [
      { icon: "ri-loop-left-line", text: "up to 2 revision rounds per monthly delivery" },
      { icon: "ri-voiceprint-line", text: "revisions are included to ensure alignment with your voice" },
      { icon: "ri-time-line", text: "feedback should be shared within 48 - 72 hours after delivery" },
      { icon: "ri-error-warning-line", text: "additional revisions outside scope may be charged or moved to the next cycle" },
    ],
  },
];

export default function SystemNote() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            // Trigger staggered cascade after a brief pause
            const t1 = setTimeout(() => setActiveIndex(0), 150);
            const t2 = setTimeout(() => setActiveIndex(1), 550);
            const t3 = setTimeout(() => setActiveIndex(2), 950);
            timeouts.current.push(t1, t2, t3);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  return (
    <section
      id="system"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-surface-light overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[140px] -translate-x-1/2" />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 xl:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-14 md:mb-20">
            <p className="animate-in opacity-0 translate-y-8 transition-all duration-700 ease-out font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-heading">
              Terms &amp; System
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line — draws down as items reveal */}
            <div
              className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-border/30 origin-top transition-transform duration-1000 ease-out"
              style={{
                transform:
                  activeIndex >= 0 ? "scaleY(1)" : "scaleY(0)",
              }}
            />

            {timelineItems.map((item, index) => {
              const isActive = index <= activeIndex;
              const isPast = index < activeIndex;

              return (
                <div
                  key={item.id}
                  className={`timeline-item relative flex items-start gap-6 md:gap-10 ${
                    index < timelineItems.length - 1
                      ? "mb-14 md:mb-20"
                      : ""
                  }`}
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translateY(0)"
                      : "translateY(40px)",
                    transition:
                      "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* Node */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border bg-surface flex items-center justify-center transition-all duration-500"
                      style={{
                        transform: isActive
                          ? "scale(1)"
                          : "scale(0.6)",
                        opacity: isActive ? 1 : 0,
                        borderColor: isPast
                          ? "rgba(212, 136, 106, 0.4)"
                          : undefined,
                        transitionDelay: isActive ? "200ms" : "0ms",
                      }}
                    >
                      <span
                        className="font-mono text-[10px] md:text-xs text-text-muted"
                        style={{
                          color: isPast ? "#D4886A" : undefined,
                          transition: "color 500ms ease",
                        }}
                      >
                        {item.id}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="pt-0.5 md:pt-1 flex-1"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition: `opacity 600ms ease 350ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) 350ms`,
                    }}
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <i className={`${item.icon} text-accent text-xs`} />
                      <p className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-heading">
                        {item.label}
                      </p>
                    </div>

                    {item.type === "text" ? (
                      <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-xl">
                        {item.content}
                      </p>
                    ) : (
                      <ul className="space-y-4 max-w-xl">
                        {item.items?.map((listItem, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed"
                            style={{
                              opacity: isActive ? 1 : 0,
                              transform: isActive
                                ? "translateY(0)"
                                : "translateY(12px)",
                              transition: `opacity 400ms ease ${
                                500 + i * 120
                              }ms, transform 400ms cubic-bezier(0.22, 1, 0.36, 1) ${
                                500 + i * 120
                              }ms`,
                            }}
                          >
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-surface-light border border-border/60 flex items-center justify-center mt-1.5">
                              <i
                                className={`${listItem.icon} text-text-muted text-[10px]`}
                              />
                            </span>
                            <span>{listItem.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}