import { TerminalTyper } from '../ui/TerminalTyper';

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-14">
      <div className="max-w-5xl mx-auto px-6 w-full py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted dark:text-[#6B6055] mb-6">
            Software Engineering · Conestoga · 2026
          </p>
          <div className="h-px bg-rule dark:bg-[#2A2420] mb-8" />
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink dark:text-[#EDE8DF] leading-[1.05] mb-8">
            Juan Felipe<br />
            Montero<br />
            Cortes
          </h1>
          <div className="h-px bg-rule dark:bg-[#2A2420] mb-8" />
          <p className="font-body italic text-xl text-muted dark:text-[#8A7F75] mb-10 leading-relaxed">
            Code is easy. Building something someone can actually use is the hard part.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2 font-mono text-xs tracking-widest uppercase border border-ink dark:border-[#EDE8DF] text-ink dark:text-[#EDE8DF] hover:bg-ink hover:text-cream dark:hover:bg-[#EDE8DF] dark:hover:text-[#120F0D] transition-colors"
            >
              View Work
            </a>
            <a
              href="https://github.com/jfmonterocortes"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 flex items-center gap-2 font-mono text-xs tracking-widest uppercase border border-rule dark:border-[#2A2420] text-muted dark:text-[#6B6055] hover:border-ink dark:hover:border-[#EDE8DF] hover:text-ink dark:hover:text-[#EDE8DF] transition-colors"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jfmonterocortes"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 flex items-center gap-2 font-mono text-xs tracking-widest uppercase border border-rule dark:border-[#2A2420] text-muted dark:text-[#6B6055] hover:border-ink dark:hover:border-[#EDE8DF] hover:text-ink dark:hover:text-[#EDE8DF] transition-colors"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <TerminalTyper />
        </div>
      </div>
    </section>
  );
}
