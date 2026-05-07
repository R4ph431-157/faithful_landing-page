function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
    return (
      <footer className="bg-surface border-t border-border py-10 md:py-14">
        <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <button
              onClick={() => scrollTo("hero")}
              className="font-serif text-xl font-semibold text-text tracking-tight cursor-pointer"
            >
              Founder&apos;s Pen
            </button>

            <p className="text-sm text-text-secondary text-center">
              ghostwriting for builders and creators
            </p>

          </div>

          <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Founder's Pen. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollTo("pricing")}
                className="text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
              >
                pricing
              </button>
              <button
                onClick={() => scrollTo("faq")}
                className="text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
              >
                contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
