import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#091027";

const sections = [
  {
    number: "1.",
    title: "Introduction",
    body: [
      "Founder's Pen (\"we,\" \"us,\" \"our\") respects your privacy and is committed to protecting any personal information you share when using our website or services.",
      "This policy explains what we collect, how we use it, and your rights.",
      "By using this website, you agree to this policy. If you do not agree, please do not use the site.",
    ],
  },
  {
    number: "2.",
    title: "Information We Collect",
    body: ["We may collect the following information:"],
    list: [
      "Name",
      "Email address",
      "Payment details (processed securely by third-party providers)",
      "Information you provide in forms or onboarding questionnaires",
      "Basic website usage data (like pages visited)",
    ],
    footer: "We do not collect sensitive personal data.",
  },
  {
    number: "3.",
    title: "How We Use Your Information",
    body: ["We use your information to:"],
    list: [
      "Deliver your ghostwriting services",
      "Communicate with you about your project",
      "Process payments",
      "Improve our services",
      "Handle support or revisions",
    ],
    footer: "We do not sell your personal data.",
  },
  {
    number: "4.",
    title: "Payments",
    body: [
      "All payments are handled through secure third-party payment processors.",
      "We do not store your full payment details on our servers.",
    ],
  },
  {
    number: "5.",
    title: "Data Sharing",
    body: ["We only share your information when necessary, such as:"],
    list: [
      "Payment processors",
      "Tools used to deliver your service (e.g. scheduling or communication tools)",
      "Legal requirements if needed",
    ],
    footer: "We never share your work publicly without permission.",
  },
  {
    number: "6.",
    title: "Data Retention",
    body: ["We keep your information only as long as needed to:"],
    list: [
      "Deliver your service",
      "Maintain records for business purposes",
      "Meet legal obligations",
    ],
    footer: "You can request deletion of your data after service completion.",
  },
  {
    number: "7.",
    title: "Security",
    body: [
      "We take reasonable steps to protect your data.",
      "However, no online system is 100% secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    number: "8.",
    title: "Your Rights",
    body: ["You can:"],
    list: [
      "Request access to your data",
      "Request correction of your data",
      "Request deletion of your data after service",
    ],
    footer: "Just contact us and we'll handle it.",
  },
  {
    number: "9.",
    title: "Cookies",
    body: [
      "We may use cookies to improve your browsing experience and understand site usage.",
      "You can disable cookies in your browser settings.",
    ],
  },
  {
    number: "10.",
    title: "Changes to This Policy",
    body: [
      "We may update this policy from time to time. Updates will always be posted on this page.",
    ],
  },
  {
    number: "11.",
    title: "Contact",
    body: ["If you have any questions, contact: founderspenhq@gmail.com"],
  },
];

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p
              className="text-xs sm:text-sm tracking-wide"
              style={{ color: "rgba(9, 16, 39, 0.45)" }}
            >
              Last updated: May 9, 2026
            </p>

            {/* Divider */}
            <div className="mt-8 h-px w-full" style={{ backgroundColor: "rgba(9, 16, 39, 0.1)" }} />
          </div>

          {/* Sections */}
          <div className="space-y-12 md:space-y-16">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="newspirit text-xl sm:text-2xl font-semibold mb-4 leading-snug"
                  style={{ color: NAVY }}
                >
                  {section.number} {section.title}
                </h2>

                <div className="space-y-3">
                  {section.body.map((para, i) => (
                    <p
                      key={i}
                      className="text-sm sm:text-[0.9rem] leading-[1.85] tracking-wide"
                      style={{ color: "rgba(9, 16, 39, 0.72)" }}
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
                        style={{ color: "rgba(9, 16, 39, 0.72)" }}
                      >
                        <span className="mt-2.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: NAVY }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p
                    className="mt-3 text-sm sm:text-[0.9rem] leading-[1.85] tracking-wide"
                    style={{ color: "rgba(9, 16, 39, 0.72)" }}
                  >
                    {section.footer}
                  </p>
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
