function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

interface FooterProps {
  subPage?: boolean;
}

export default function Footer({ subPage = false }: FooterProps) {
  return (
    <footer className="bg-navy border-t border-white/10 py-10 md:py-14">
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {subPage ? (
            <a
              href="/"
              className="font-serif text-xl font-semibold text-text tracking-tight cursor-pointer newspirit"
            >
              Founders Pen
            </a>
          ) : (
            <button
              onClick={() => scrollTo("hero")}
              className="font-serif text-xl font-semibold text-text tracking-tight cursor-pointer newspirit text-left"
            >
              Founders Pen
            </button>
          )}

          <nav className="flex flex-col items-start gap-4">
            <a
              href="/terms"
              className="text-sm text-text-secondary hover:text-text transition-colors cursor-pointer underline underline-offset-4 decoration-text-secondary/40 hover:decoration-text"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="/privacy"
              className="text-sm text-text-secondary hover:text-text transition-colors cursor-pointer underline underline-offset-4 decoration-text-secondary/40 hover:decoration-text"
            >
              Privacy Policy
            </a>
            {subPage ? (
              <a
                href="/#contact"
                className="text-sm text-text-secondary hover:text-text transition-colors cursor-pointer underline underline-offset-4 decoration-text-secondary/40 hover:decoration-text"
              >
                Contact us
              </a>
            ) : (
              <button
                onClick={() => scrollTo("contact")}
                className="text-sm text-text-secondary hover:text-text transition-colors cursor-pointer underline underline-offset-4 decoration-text-secondary/40 hover:decoration-text"
              >
                Contact us
              </button>
            )}
          </nav>
        </div>

        <span className="text-xs text-text-secondary">© 2026 Founders Pen</span>
      </div>
    </footer>
  );
}
