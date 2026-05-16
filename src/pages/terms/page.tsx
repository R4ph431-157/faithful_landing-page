import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#091027";

const sections = [
  {
    title: "Agreement",
    body: [
      "By engaging Founder's Pen, the Client agrees to these Terms and Conditions including all service, payment, and delivery terms outlined in this document.",
      "Failure to comply may result in suspension or termination of services without obligation for refund of any completed or ongoing work.",
    ],
  },
  {
    title: "Services",
    body: [
      "Founder's Pen provides monthly ghostwriting services for Twitter and LinkedIn based on the selected plan.",
      "All services are custom created for each Client and delivered digitally.",
    ],
  },
  {
    title: "Payment Terms",
    body: [
      "All payments are made monthly upfront.",
      "Accepted payments: USDT / USDC.",
      "Each subscription covers a 30-day service cycle starting from the date payment is received.",
      "Work begins only after payment confirmation.",
    ],
  },
  {
    title: "Delivery Timeline",
    body: [
      "All monthly content is delivered within 5 business days after onboarding unless otherwise communicated.",
      "Delays caused by incomplete information or late responses from the Client are not the responsibility of Founder's Pen.",
    ],
  },
  {
    title: "Revisions",
    body: [
      "Each monthly cycle includes up to 2 revision rounds.",
      "Revisions are meant to refine clarity, tone, and alignment, not to completely change the original direction of the content.",
      "Additional revisions outside scope may be charged or moved to the next cycle.",
    ],
  },
  {
    title: "Ownership of Content",
    body: [
      "Upon full payment, all final content delivered becomes the Client's property.",
      "Founder's Pen retains the right to use general frameworks, strategies, and non-client-specific systems for future work.",
    ],
  },
  {
    title: "Confidentiality",
    body: [
      "All Client information, brand details, and content are strictly confidential.",
      "Founder's Pen will not disclose, publish, or share any Client work unless given written permission.",
    ],
  },
  {
    title: "Client Responsibility",
    body: [
      "Clients are responsible for providing accurate onboarding information, brand direction, and timely feedback.",
      "Failure to provide necessary inputs may affect delivery timelines or content quality.",
    ],
  },
  {
    title: "Refund Policy",
    body: [
      "Due to the custom nature of the service, all payments are non-refundable once work has commenced.",
      "Refunds are not guaranteed and are reviewed at our sole discretion.",
    ],
  },
  {
    title: "Service Limitations",
    body: [
      "This service does not include:",
    ],
    list: [
      "Engagement such as replies, DMs, or community management",
      "Paid advertising or distribution",
      "Growth or marketing services outside content creation",
    ],
  },
  {
    title: "Termination",
    body: [
      "Clients may choose not to renew after each monthly cycle.",
      "No long-term commitment is required unless otherwise agreed in writing.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions regarding these Terms, contact: founderspenhq@gmail.com",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar subPage />

      <main className="flex-1 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 md:px-10">

          {/* Page heading */}
          <div className="mb-14 md:mb-20">
            <h1
              className="newspirit text-4xl sm:text-5xl md:text-[3.25rem] font-semibold leading-[1.1] tracking-tight mb-3"
              style={{ color: NAVY }}
            >
              Terms and Conditions
            </h1>
            <p
              className="text-xs sm:text-sm tracking-wide"
              style={{ color: `rgba(9, 16, 39, 0.45)` }}
            >
              Last updated: May 9, 2026
            </p>

            {/* Divider */}
            <div className="mt-8 h-px w-full" style={{ backgroundColor: `rgba(9, 16, 39, 0.1)` }} />

            {/* Intro paragraph */}
            <p
              className="mt-8 text-sm sm:text-[0.9rem] leading-[1.85] tracking-wide"
              style={{ color: `rgba(9, 16, 39, 0.72)` }}
            >
              This Terms and Conditions ("Agreement") is a legally binding agreement between Founder's Pen ("Service Provider") and the Client. By purchasing or using our services, the Client agrees to be bound by these terms. If the Client does not agree, they should not proceed with payment or onboarding.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12 md:space-y-16">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="newspirit text-xl sm:text-2xl font-semibold mb-4 leading-snug"
                  style={{ color: NAVY }}
                >
                  {section.title}
                </h2>

                <div className="space-y-3">
                  {section.body.map((para, i) => (
                    <p
                      key={i}
                      className="text-sm sm:text-[0.9rem] leading-[1.85] tracking-wide"
                      style={{ color: `rgba(9, 16, 39, 0.72)` }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {section.list && (
                  <ul className="mt-3 space-y-2 pl-4">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm sm:text-[0.9rem] leading-[1.85] tracking-wide"
                        style={{ color: `rgba(9, 16, 39, 0.72)` }}
                      >
                        <span className="mt-2.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: NAVY }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer subPage />
    </div>
  );
}
